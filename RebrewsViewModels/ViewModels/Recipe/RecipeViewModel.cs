﻿using System.Collections.Generic;
using System.Runtime.Serialization;

namespace RebrewsViewModels.ViewModels.Recipe
{
    [DataContract]
    public class RecipeViewModel
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public string Name { get; set; }



        [DataMember]
        public ICollection<RecipeFermentableViewModel> Fermentables { get; set; }

        [DataMember]
        public ICollection<RecipeHopViewModel> Hops { get; set; }

        [DataMember]
        public ICollection<RecipeYeastViewModel> Yeasts { get; set; }


        [DataMember]
        public RecipeProfileViewModel Profile { get; set; }

        [DataMember]
        public RecipeStyleViewModel Style { get; set; }

        [DataMember]
        public int Style_Id { get; set; }

    }
}