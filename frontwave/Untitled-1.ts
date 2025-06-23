        // if (!nom || !prenom || !password || !passwordConfirm || !numero) {
        //     toast.error('Veuillez remplir tous les champs !');
        //     // setLoading(false);
        //     return;
        // }

        // if (password !== passwordConfirm) {
        //     toast.error("Les mots de passe ne correspondent pas !");
        //     // setLoading(false);
        //     console.log(
        //         nom,prenom,numero,password
        //     )
        //     return;
        // }

        // axios.post('http://192.168.57.65:8080/users/register', {
        //     nom: nom,
        //     prenom: prenom,
        //     numero: numero,
        //     mdp: password,
        // })
        //     .then(response => {
        //         console.log(response.data)
        //         toast.success('Compte créé avec succès !');
        //         setTimeout(() => navigate('/myaccount'), 500);
        //     })
        //     .catch(error => {
        //         toast.error("Erreur lors de la création du compte.");
        //         console.log("Erreur backend :", error);
        //     })
        // .finally(() => );
    }


    // const SendingValeurOnBackend = () => {
    //     axios.post(`http://192.168.57.65:8080/users/register`, {
    //         nom,
    //         prenom,
    //         password,
    //         numero
    //     }, {
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then(response => {
    //             console.log('Donnée envoyée', response.data)
    //             toast.success('Vous avez crée votre compte')
    //             setTimeout(() => {
    //                 navigate('/myaccount')
    //             }, 200)
    //         })
    //         .catch(error => {
    //             console.log("une erreur au niveau de l'auth : ", error)
    //         })
    // }