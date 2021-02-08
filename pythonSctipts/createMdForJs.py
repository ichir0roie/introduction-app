

import glob
import os
import shutil


print(os.getcwd())

FolderPath = "public/"
ProjectPutPath = "build/"

if not os.path.exists(ProjectPutPath+"/mdFiles"):
    os.mkdir(ProjectPutPath+"/mdFiles")

targetFile = "src/index.js"

rowFiles = glob.glob(FolderPath+"mdFiles/*.md")
print(rowFiles)


outTmpTxt2 = ""

tmpTxtVal = 'var mdPages = [\n'
tmpTxtAry = '["{0}", "{1}"],\n'
tmpTxtFin = '];\n'

outTmpTxt2 = tmpTxtVal

for path in rowFiles:

    savePath = path.replace(FolderPath, ProjectPutPath).replace("\\", "/")
    url = savePath.replace(ProjectPutPath, "")

    shutil.copy2(path, savePath)

    saveFileName = path.split("\\")[-1].replace(" ", "")
    title = saveFileName.replace(".md", "")
    outTmpTxt2 += tmpTxtAry.replace("{0}", title).replace("{1}", url)


outTmpTxt2 += tmpTxtFin

replcImtTxt = outTmpTxt2

print("----------------------------------")
print(replcImtTxt)
print("----------------------------------")

with open(targetFile, "r", encoding="utf-8")as f:
    appFile = f.readlines()

strtReplcTag = "python mdLinks auto generator start"
endReplcTag = "python mdLinks auto generator end"

retFile = ""

for row in appFile:
    retFile += row
    if strtReplcTag in row:
        break

retFile += replcImtTxt

afterFile = False
for row in appFile:
    if afterFile:
        retFile += row
    if endReplcTag in row:
        retFile += row
        afterFile = True

with open("src/AppBK.js", "w", encoding="utf-8")as f:
    f.writelines(appFile)

with open(targetFile, "w", encoding="utf-8")as f:
    f.write(retFile)
