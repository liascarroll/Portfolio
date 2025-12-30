
numbers = [20,5,10,100,30,35]
#sum len max min
print(sum(numbers), len(numbers), max(numbers), min(numbers))
#avg with sum, len
avg = sum(numbers) / len(numbers) if numbers else None
print(avg)


#extend
numbers.extend([100,20,20,10,100])
print(numbers)


#count an element
print(numbers.count(100))

#all elements and their counts  using for loop
for num in numbers:
    print(num, numbers.count(num))


#index  - find position of an element
print(numbers.index(100))

#index of duplicates, with enumerate and if
for index, value in enumerate(numbers):
    if value == 100:
        print(index)

# sort
s_nums = sorted(numbers)
r_nums = sorted(numbers, reverse=True)
print(numbers)
print(s_nums)
#sort reverse
print(r_nums)

#sorted does not affect original list.

#sort and find max

#second highest?  (eliminate duplicates first)

#-1 indexing
print(s_nums[-1])

#unique  (use set, and then list again)
uniques = sorted(list(set(numbers)), reverse=True)
print(uniques[1])
#set to eliminate duplicates
#back to the list, so that we can do [] indexing
#then do the sort. We dont do the sort before conersion to set bc the set does not have ordering
#reverse, so that we can use 1 for second element.
#if not reverse, use -2

#if married in {0,1}

#list comprehension   
#squares
numbers = [10, 3, 4, 5]
squares = [num * num for num in numbers]
roots = [num ** 0.5 for num in numbers]
print(numbers)
print(squares)
print(roots)
#10 100
#3 9
#zip
for number,square in zip(numbers,squares):
    print(number, square)

#for loop with zip     print names and scores
names = ['Joe', 'Jake', 'Jenny']
scores = [90, 45, 80]
for name,score in zip(names,scores):
    print(name, score)

#is the result of zip a list?  try printing

#convert to list and print
print(list(zip(names,scores)))

#dict with zip  <--where zip is really valuable
print(dict(zip(names,scores)))



#map

def get_root(num):
    return num**0.5

print(get_root(25))

numbers = [100,16,25,81]
roots = list(map(get_root, numbers))
print(roots)

def find_grade(score):
    return 'A' if score > 80 else 'B'

grades = list(map(find_grade, scores))
for name,score, grade in zip(names,scores,grades):
    print(name,score, grade)


#compare with list comprehension.  use map when possible.

#filter    <--use for bool functions.  find evens in the list
def is_even(num):
    return num % 2 == 0

print(numbers)
evens = list(filter(is_even, numbers))
print(evens)

def is_odd(num):
    return num % 2 == 1
odds = list(filter(is_odd, numbers))
print(odds)
#pattern   list(map(func,lst))  list(filter(func,lst))

#reversed
rev = reversed(numbers)
print(list(rev))


#given a list, generate a dict with counts of each element
numbers = [100,80,100,1,1,1,2,2]
print(numbers)
#   first, generate another list, counts.
counts = []
for num in numbers:
    counts.append(numbers.count(num))
print(counts)

d_counts = dict(zip(numbers,counts))
print(d_counts)


#two parallel lists,  can we make a dictionary?
#will the duplicates be a problem?



# given a list of scores, generate ranks
scores = [100,78,66,66,66,5,99,67]
#will duplicates be a problem?  if yes, remove them. 
#then sort highest first.

#can we make a list called ranks?

#look at sorted scores, and ranks. can we make a dictionary?



students = [
    ['Joe', 89, 'A', 'Graded'],
    ['Alex', 78, 'B', 'Graded'],
    ['Cathy', 100, 'A', 'Graded'],
    ['Denise', 45, 'C', 'Graded'],
    ['Emily', 65, 'P', 'PassFail'],
    ['Frank', 6, 'F', 'PassFail']
]

#list of students. sort on key    sorted(iterable, key=function)

#sort on score  > first, make a function for the key. function returns the attribute we sort on.

#sort on grade

#list of students.  sort on key within key.
#score within grade.

#list of students.   using comprehension, make list of scores. find avg score.
# find avg score for graded students.
# count A grades, 100s


