function punctuationFilter(unmatchedEntry){
      let i = 0;
      let dotFilter = [];
      let bangFilter = [];
      let questionFilter = [];
      let frontQuoteFilter = [];
      let backQuoteFilter = [];
      let frontApostropheFilter = [];
      let backApostropheFilter = [];
      let colonFilter = [];
      let semiColonFilter = [];
      let atTheEnd = []
      while(i < unmatchedEntry.length){
        console.log(unmatchedEntry[i])
          // strip out .
        if (unmatchedEntry[i].endsWith('.')){
          dotFilter = unmatchedEntry[i].split('');
          dotFilter.pop();
          atTheEnd.push(dotFilter.join(""));
          // strip out !
        }else if(unmatchedEntry[i].endsWith('!')){
          bangFilter = unmatchedEntry[i].split('');
          bangFilter.pop();
          atTheEnd.push(bangFilter.join(""));
            // strip out ?
        }else if(unmatchedEntry[i].endsWith('!')){
          questionFilter = unmatchedEntry[i].split('');
          questionFilter.pop();
          atTheEnd.push(questionFilter.join(""));
            // strip out "
        }else if(unmatchedEntry[i].endsWith('"')){
          backQuoteFilter = unmatchedEntry[i].split('');
          backQuoteFilter.pop();
          atTheEnd.push(backQuoteFilter.join(""));
        }else if(unmatchedEntry[i].startsWith('"')){
          frontQuoteFilter = unmatchedEntry[i].split('');
          frontQuoteFilter.shift();
          atTheEnd.push(frontQuoteFilter.join(""));
          // strip out '
        }else if(unmatchedEntry[i].startsWith("'")){
          frontApostropheFilter = unmatchedEntry[i].split('');
          frontApostropheFilter.shift();
          atTheEnd.push(frontApostropheFilter.join(""));
        }else if(unmatchedEntry[i].endsWith("'")){
          backApostropheFilter = unmatchedEntry[i].split('');
          backApostropheFilter.pop();
          atTheEnd.push(backApostropheFilter.join(""));
          // strip out :
        }else if(unmatchedEntry[i].endsWith(":")){
          colonFilter = unmatchedEntry[i].split('');
          colonFilter.pop();
          atTheEnd.push(colonFilter.join(""));
          // strip out ;
        }else if(unmatchedEntry[i].endsWith(";")){
          semiColonFilter = unmatchedEntry[i].split('');
          semiColonFilter.pop();
          atTheEnd.push(semiColonFilter.join(""));
        }else{ atTheEnd.push(unmatchedEntry[i])}
      i++
      }
      atTheEnd.forEach(el => {
        if(list.indexOf(el) == -1){ 
          unpuncuateNotListWords.push(el)
        };
      });
    };