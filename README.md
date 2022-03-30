# Template til skoleprosjekter

## Sett opp prosjektet lokalt

npm install (husk å endre navn på pakken)  

## Sette opp git og publiser til GitHub

git clone https://reiv003@github.com/reiv003/template.git  
slett .git-filen fra mappen (dette er for at commit-historikken til template-prosjektet ikke skal bli med i det nye prosjektet)  
git init  
(lag ny remote repo først direkte på github)  
git remote add origin https://brukernavn@github.com/brukernavn/reponavn.git   
lag initial commit  
publish branch (main)  

## Publiser til Netlify

npm run build  
npm run preview  
(genererer dist-mappe)  

Velg deploy fra GitHub på Netlify  

kjør npm run build hver gang en endring er committed for å oppdatere nettsiden.  
