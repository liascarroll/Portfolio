"""HW 6     Lia Carroll     11.17.23"""
taxpayers_list = []

def is_valid_input(marrital_status):
    return marrital_status == 1 or marrital_status == 0

def submit():
    global taxpayers_list
    list_inputs = input('Enter name, income, and married or not (1/0)>>')

    process_line(list_inputs)

    list = print_list()
    print(list)

def process_line(list_inputs):
    list_inputs = list_inputs.split(',')
    name = list_inputs[0]
    income = float(list_inputs[1])
    marrital_status = int(list_inputs[2])
    while not is_valid_input(marrital_status):
        print(f'You entered {marrital_status:n}. Please enter 1 or 0 (married/not married)')
        marrital_status = int(input('Enter 1 if married and 0 if not married >>'))
    
    tax = compute_tax(income, marrital_status)

    if marrital_status == 1:
        status = 'Married'
    if marrital_status == 0:
        status = 'Not Married'

    #taxpayer = [name, income, status, tax]
    taxpayer = {}
    taxpayer['name'] = name
    taxpayer['income'] = income
    taxpayer['status'] = status
    taxpayer['tax'] = tax

    taxpayers_list.append(taxpayer)

    return taxpayer

def print_list():
    global taxpayers_list
    for taxpayer in taxpayers_list:
        print(taxpayer['name'])
        print(taxpayer['income'])
        print(taxpayer['status'])
        print(taxpayer['tax'])

def compute_tax(income, marrital_status):
    if marrital_status == 1: #married
        if income > 150000.0:
            tax_rate = 0.30
        else:
            tax_rate = 0.20
    else:
        if income > 100000.0:
            tax_rate = 0.15
        else:
            tax_rate = 0.10
    
    tax = income * tax_rate

    return tax

def line():
  print('-' * 65)

def display():
    global taxpayers_list
    
    if not taxpayers_list:
        print('No data to display')
        return
    
    line()
    print(f'|{"Name":^15s}|{"Income":^15s}|{"Marrital Status":^15s}|{"Tax":^15s}|')
    for taxpayer in taxpayers_list:
        name = taxpayer['name']
        income = taxpayer['income']
        marrital_status = taxpayer['status']
        tax = taxpayer['tax']
        print(f'|{name:^15s}|{income:^15.2f}|{marrital_status:^15s}|{tax:^15.2f}|')
    line()

def compute_averages():
    global taxpayers_list
    num_inputs = 0
    total_tax = 0.0
    total_married_tax = 0.0
    total_unmarried_tax = 0.0
    num_married_taxpayers = 0
    num_unmarried = 0
    avg_tax_for_married = 0.0
    avg_tax_for_unmarried = 0.0

    for taxpayer in taxpayers_list:
        tax = taxpayer['tax']
        num_inputs += 1
        total_tax += tax

    if num_inputs > 0:
        avg_tax = total_tax / num_inputs
    else:
        avg_tax = None
    

    for taxpayer in taxpayers_list:
        if taxpayer['status'] == 'Married': #married
            married_tax = taxpayer['tax']
            total_married_tax += married_tax
            num_married_taxpayers += 1

        if taxpayer['status'] == 'Not Married': #not married
            num_unmarried += 1
            total_unmarried_tax += taxpayer['tax']
    
    if num_married_taxpayers > 0:
        avg_tax_for_married = total_married_tax / num_married_taxpayers
    else:
        avg_tax_for_married = None

    if num_unmarried > 0:
        avg_tax_for_unmarried = total_unmarried_tax / num_unmarried
    else:
        avg_tax_for_unmarried = None


    return avg_tax, avg_tax_for_married, num_unmarried, avg_tax_for_unmarried, num_married_taxpayers

    
def summary():
    global taxpayers_list
    avg_tax, avg_tax_for_married, num_unmarried, avg_tax_for_unmarried, num_married_taxpayers = compute_averages()

    print('Summary:')

    if avg_tax is not None:
        print(f'Average Tax: {avg_tax:.2f}')
    else:
        print('No average to compute.')
    
    if avg_tax_for_married is not None:
        print(f'Average tax for married taxpayers: {avg_tax_for_married:.2f}')
    else:
        print('No average tax for married taxpayers to compute.')
    if avg_tax_for_unmarried is not None:
        print(f'Average tax for unmarried taxpayers: {avg_tax_for_unmarried:.2f}')
    else:
        print('No average tax for unmarried taxpayers to compute')
    
    print(f'Number of Unmarried Taxpayers: {num_unmarried:n}')
    total_num_taxpayers = num_unmarried + num_married_taxpayers
    print(f'The number of taxpayers is: {total_num_taxpayers}')

def reset():
    global taxpayers_list
    taxpayers_list.clear()

def load():
    global taxpayers_list
    amount_loaded = 0
    datafile = 'load.txt'
    with open(datafile, 'r') as loadfile:
        lines = loadfile.readlines()

    for line in lines:
        process_line(line)
        amount_loaded += 1

    print(f'{amount_loaded:d} taxpayers loaded from data.txt')

def save():
    global taxpayers_list
    taxpayers = 0

    save_data = ''
    for taxpayer in taxpayers_list:
        line = f'{taxpayer["name"]:s},{taxpayer["income"]:.2f},{taxpayer["status"]:s},{taxpayer["tax"]:.2f}\n'
        save_data += line
        taxpayers += 1

    with open('outputs.txt', 'w') as savefile:
        savefile.write(save_data.strip('\n'))

    print(f'{taxpayers:n} taxpayers were saved to outputs.txt')
    

def search():
    global taxpayers_list


    if not taxpayers_list:
        print('No database to search in..')
        return

    key = float(input('Enter income value to search for >'))
    decision = int(input('Enter 1 to see income values above, 2 for below, and 3 for equal to value provided >'))
  
    found = False
    for taxpayer in taxpayers_list:
        income = taxpayer['income']
        if decision == 1:
            if key > income:
                print(taxpayer)
                found = True
        if decision == 2:
            if key < income:
                print(taxpayer)
                found == True
        if decision == 3:
            if key == income: 
                print(taxpayer)
                found = True

  #end loop
    if not found:
        print('Not found!')


#main
quit = False #create a bool variable 
while not quit: #loop
    print('1.Submit 2.Load 3.Save 4.Summary 5.Display 6.Reset 7.Search 8.Exit')
    choice = int(input('Enter 1, 2, 3, 4, 5, 6, 7, or 8>'))
    if choice == 1:
        submit()
    elif choice == 2:
        load()
    elif choice == 3:
        save()
    elif choice == 4:
        summary()
    elif choice == 5:
        display()
    elif choice == 6:
        reset()
        print('Ready for new series of inputs..')
    elif choice == 7:
        search()
    elif choice == 8:
        taxpayers_list.clear() #clear memory before exit
        quit = True
    else:
        print('Invalid choice!')
print('Bye!')
    