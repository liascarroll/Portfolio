#List comprehension    using a Generator expression
numbers = [1,2,3,4,5]
squares = [num * num for num in numbers]
print(squares)

doubles = [num * 2 for num in numbers]
print(doubles)


income_list = [1000.0,2000.0,10000.0,20000.0]
hi = [income for income in income_list if income >= 2000.0]
#also looks like... way above is more efficient
hi = []
for income in income_list:
    if income >= 2000.0:
        hi.append(income)


students = [ ['Alex', 80],  ['Ben', 77], ['Cathy', 81]]
#scores as a list
scores = [student[1] for student in students]
print(scores)
#names as a list
names = [student[0] for student in students]
print(names)
#which also looks like... way above is more efficient 
# scores = []
# for student in students:
#     scores.append(student[1])


students = [ ['Alex', 80, 'Graded'],  ['Ben', 77, 'PassFail'], ['Cathy', 81, 'Graded']]
graded = [student[0] for student in students if student[2] == 'Graded']
print(graded)
for name in graded:
    print(name)


students = [
    {'name':'Alex', 'score':80, 'grade':'A'},
    {'name':'Adam', 'score':90, 'grade':'A'},
    {'name':'Alice', 'score':70, 'grade':'B'}
    ]
#score >= 80
high_scores = [student['name'] for student in students if student['score'] >= 80]
print(high_scores)
#grade is A
has_A = [student['name'] for student in students if student['grade'] == 'A']
print(has_A)




#MAP
# list(map(func, list))

def get_score(student):
    return student['score']

scores = list(map(get_score, students))
print(scores)

#get_grade
def get_grade(student):
    return student['grade']

grades = list(map(get_grade, students))
print(grades)

def get_name_if_A(student):
    if student['grade'] == 'A':
        return student['name']
    else:
        return None
has_A = list(map(get_name_if_A, students))
print(has_A)

#FILTER
#apply a bool function to select only some values
#select A students => function returns True for grade A
def has_grade_A(student):
    return student['grade'] == 'A'
a_students = list(filter(has_grade_A, students))
print(a_students)





students = [
    {'name':'Alex', 'score':80, 'grade':'A'},
    {'name':'Adam', 'score':90, 'grade':'A'},
    {'name':'Alice', 'score':70, 'grade':'B'}
    ]
# use filter to get students with score >= 80
def is_hi_score(student):
    return student['score'] >= 80
hi_score_students = list(filter(is_hi_score, students))
print(hi_score_students)
#---------------------------------------------------------------------------------------------------------------
students = [ ['Alex', 80, 'Graded'],  ['Ben', 77, 'PassFail'], ['Cathy', 81, 'Graded']]

#find students who are on P/F basis using filter
def is_passfail(student):
    return student[2] == 'PassFail'

pf_students = list(filter(is_passfail, students))
print(pf_students)






income_list = [100000.0,2000.0,40000.0,20000.0,2000.0]
s_inc = sorted(income_list)
print(s_inc)
r_inc = sorted(income_list, reverse=True)
print(r_inc)
print(r_inc[0], r_inc[1])
print(s_inc[0], r_inc[-1]) #-1 is last element, -2, -3 counting from end...

#eliminate duplicates first
#make a list unique =>  list(set(income_list))
s_uniques = sorted(list(set(income_list)))
print(s_uniques[1])




students = [ ['Alex', 80, 'Graded'],  ['Ben', 77, 'PassFail'], ['Cathy', 81, 'Graded']]
#1 a function to get the item to sort on
def get_score(student):
    return student[1]

#2 do sorted with key=function you made
on_scores = sorted(students, key=get_score, reverse=True)
print(on_scores)

def get_status(student):
    return student[2]

on_status = sorted(students, key=get_status)
print(on_status)



students = [
    ['Alex', 80,'A', 'Mkt'],
    ['Ben', 77, 'B', 'Acct'],
    ['Cathy', 91,  'A', 'Mkt'],
    ['Denise', 61,  'C', 'Mkt'],
    ['Emily', 71,  'B', 'Acct'],
    ['Frank', 58,  'C', 'Acct'],
    ]

#a function to get the major
def get_major(student):
    return student[3]


def get_grade(student):
    return student[2]
on_grades = sorted(students, key=get_grade)
print(on_grades)

#sort by scores descending, within grades

#do the scores sort first, then do the grades sort.
def get_score(student):
    return student[1]
#scores descending
on_scores_desc = sorted(students, key=get_score, reverse=True)
print(on_scores_desc)

on_grade_and_score = sorted(on_scores_desc, key=get_grade)
print(on_grade_and_score)

#on scores within majors.
on_scores = sorted(students, key=get_score, reverse=True)
print(on_scores)
on_major = sorted(on_scores, key=get_major)
print(on_major)




students = [
    {'name':'Abe', 'score':65, 'grade':'B'},
    {'name':'Alex', 'score':80, 'grade':'A'},
    {'name':'Adam', 'score':90, 'grade':'A'},
    {'name':'Alice', 'score':70, 'grade':'B'}
    ]

d = {'name':'Abe', 'score':65, 'grade':'B'}
d_list = list(d.values())
print(d_list)

students_as_lists = []
for student in students:
    s_list = list(student.values())
    students_as_lists.append(s_list)
print(students_as_lists)




students = [['Joe', 100, 'A'], ['Jack', 90, 'A'], ['Jim', 80, 'B']]
#names, scores, grades (3 lists)
names = [student[0] for student in students]
print(names)
scores = [student[1] for student in students]
print(scores)

names, scores, grades = list(zip(*students))
scores = list(scores)
print(scores)

#Unpacking:
# zip(*students) is the same as below
# zip(students[0], students[1], students[2])

lst = [
    ['joe', 'married'],
    ['susie', 'unmarried'],
    ['jill', 'married'],

]
#ojective: get names, status as lists
name_list, status_list = list(zip(*lst))
name_list = list(name_list)
status_list = list(status_list)
print(name_list)
print(status_list)
