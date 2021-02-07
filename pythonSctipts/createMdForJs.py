

import glob
import os


print(os.getcwd())
with open("pythonSctipts/template.txt", "r", encoding="utf-8")as f:
    temlate = f.read()

print(os.getcwd())

rowFiles = glob.glob("mdFiles/*.md")
print(rowFiles)

print("++++++++++++++++")

existFiles = glob.glob("src/mdForJs/*.js")
print(existFiles)

savePath = "src/mdForJs/"

outTmpTxt1 = ""
outTmpTxt2 = ""

tmpTxtImprt = 'import {0} from "./mdForJs/{0}";\n'
tmpTxtVal = 'var mdPages = [\n'
tmpTxtAry = '["{0}", <{0} />],\n'
tmpTxtFin = '];\n'

outTmpTxt2 = tmpTxtVal

for path in rowFiles:
    with open(path, "r", encoding="utf-8")as f:
        mdText = f.read()
    mdText = mdText.replace("\n", "  \n")
    replcdTxt = temlate.replace("printThis", mdText)
    saveFileName = path.split("\\")[-1].replace(" ", "")
    title = saveFileName.replace(".md", "")
    with open(savePath+saveFileName.replace(".md", ".js"), "w", encoding="utf-8")as f:
        f.write(replcdTxt)

    outTmpTxt1 += tmpTxtImprt.replace("{0}", title)
    outTmpTxt2 += tmpTxtAry.replace("{0}", title)

outTmpTxt2 += tmpTxtFin

replcImtTxt = outTmpTxt1+outTmpTxt2

print("----------------------------------")
print(outTmpTxt1+outTmpTxt2)
print("----------------------------------")

with open("src/App.js", "r", encoding="utf-8")as f:
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

with open("src/App.js", "w", encoding="utf-8")as f:
    f.write(retFile)
