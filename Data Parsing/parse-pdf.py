#imports
import pandas as pd
import pdfplumber

#load pdf and pages
filepath = "CDS/CDS 04-05.pdf"
pdf = pdfplumber.open(filepath)
page = pdf.pages[1]
pageTables = page.find_tables()
secondTable = pageTables[1].extract(x_tolerance = 5)

#format table header
res = []
for label in secondTable[0]:
    res.append(label.replace("\n", " "))
secondTable[0] = res
   
#Convert table into dataframe
df = pd.DataFrame(secondTable[1:], columns=secondTable[0])
totalStudentStr = df['Total Undergraduates (both degree- and non-degree- seeking)'][7].replace(",","")

totalStudentsNum = int(float(totalStudentStr))
#this label ignores afro-latinx and mixed students, in one go showing how limited this data collection is
#This will refer to Black students who only identify as black or are mixed but chose Black
studentGroup1Num = int(float(df['Total Undergraduates (both degree- and non-degree- seeking)'][1]))

approxBlackStudentCount = round((studentGroup1Num / totalStudentsNum) * 100, 2)
print(approxBlackStudentCount)




