def show_palindromic_triangle(n):
    odd=1
    space=n-1
    for i in range(1,n+1):
        k=0
        for j in range(1,space+1):
            print(' ',end='')
        for j in range(1,odd+1):
            if j<=i:
                k=k+1
            else:
                k=k-1
            print(k,end='')
        print()
        odd=odd+2
        space=space-1
show_palindromic_triangle(int(input('Enter a number:')))