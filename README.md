# NomTen
A web application that allows users to maintain a virtualization of their fridge and get recipe suggests or search for relevant recipes.
This is a updated and mostly rewritten version of a group project from CSC309 at the University of Toronto by Linda Zhang, Jesse Jaura and David Wahrhaftig
https://nomthirteen.herokuapp.com/
Sample User: jonsnow@email.com Pwd: 1234
IMPORTANT: If you are registering a new user I would need to white list your email in mailgun first for you to be able to recieve the registration email and also the emails for password reset. Please email me at jessejaura@gmail.com if you wish to have your email white listed. 

NomTen: A personalized online culinary assistant

NomTen is a Web application which allows users to maintain a virtualization of their real life fridge and search for recipes. This application allows for the personalization of the virtual fridge, user can add, remove, update ingredients which are displayed in their virtual Fridge. The ingredients is divided into 6 categories. To add an ingredient, to the Fridge the user selects the white plus sign icon from the correct category is reveal an input and then inputs the ingredient name and presses the black plus sign icon. To delete an ingredient hover over an ingredient and press the trashcan icon. 

Instead of requiring the user to have a specific recipe in mind to search for, filters are provided for the user to conveniently narrow their search to reach potentially desired recipes, guiding indecisive users to the recipe of their next meal. The user can specify in the filters, the percentage of the ingredients required by the recipe that is currently present in their virtual fridge. If the user wishes to find a recipe the user can make without buying any additional ingredients the user would put 100% in this filter. Through using the percentage filter the user is able to plan how much shopping they wish to do in order to make their next meal. The user can also specify a list of ingredients they do not wish to use and a list of ingredients they wish to exclude. Other supported filters include serving size, Allowed diets (such as vegetarian), cuisine, course, total prep time and allergies. 

Once the user specified the Filters, the user can press “Search for my recipes” to retrieve a list of 10 recommended recipes as filtered by the filters. If the percentage filter is specified less than 10 recipes are likely to be returned depending on the range of the filter parameters. The user can click on each of these recipes for a more detailed view and click on “source” to be redirected to the full recipe.
