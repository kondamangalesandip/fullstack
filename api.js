
    function getServerData() {
        $.ajax({
            url: "https://reqres.in/api/users/5",
            method: "GET",
            success: function(data){
                console.log("success", data.data);
            },
            error: function(errorData){
                console.log("error", errorData);
            }
        });
    }
