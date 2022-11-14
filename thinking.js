// receive dictionary object from form (pass as JSON??) set variable at server side (model/schema) and array for list of words
// receive story object from form (pass as JSON) also convert to array
    // remove punctuation  (endsWith, (split, pop, join)) {, . ? ! : ; "}
    // toLowerCase
// use for each loop to compare each word in story to dictionary (terrible loop in a loop?) possible binary search?
    // if in dictionary, break and move to next word
    //  if not in dictionary 
        //  figure out how to find closest match (levenshtein distance???)
        // return word and suggestion to view as JSON