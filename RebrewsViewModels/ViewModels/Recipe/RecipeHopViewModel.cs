﻿using System.Runtime.Serialization;
using RebrewsViewModels.ViewModels.Base;

namespace RebrewsViewModels.ViewModels.Recipe
{
    [DataContract]
    public class RecipeHopViewModel
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public decimal Amount { get; set; }

        [DataMember]
        public int? Base_Id { get; set; }

        [DataMember]
        public BaseHopViewModel Base { get; set; }

        [DataMember]
        public int BoilTime { get; set; }

        [DataMember]
        public bool DryHop { get; set; }

        [DataMember]
        public bool IsLeaf { get; set; }


    }
}