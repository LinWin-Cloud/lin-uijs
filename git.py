import os

if __name__ == "__main__":
    os.system("git status")
    a = input("ADD: ")
    b = input("Commit: ")
    
    os.system("git add "+str(a))
    os.system("git commit -m "+str(b))

    os.system("git pull origin master")
    os.system("git push origin master")
