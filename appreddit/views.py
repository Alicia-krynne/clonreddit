from django.shortcuts import render

# Create your views here.
def homepage(request):
    # current_user=request.user
    # post= Post.objects.all()
    # profile=Profile.objects.all()


    return render(request,'homepage.html',)


# def search_results(request):
#     if 'user' in request.GET and request.GET["user"]:
#         search_term = request.GET.get("user")
#         searched_users = Post.search_post(search_term)
#         message=f"{search_term}"

#         return render(request,'search.html',{"message":message,"users":searched_users})

#     else:
#         message="You haven't searched for any term"
#         return render(request,'search.html',{"message":message})


