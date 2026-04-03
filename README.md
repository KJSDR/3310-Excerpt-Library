# 3310-Excerpt-Library

postkit-excerpt:
- pour générer des résumés courts et clairs à partir du contenu des articles, destinés à être utilisés dans les fiches de présentation, les aperçus et les résultats de recherche

exports

createExcerpt
- Récupère un résumé lisible du texte en respectant une limite de caractères. Ne coupe pas au milieu d'un mot : le texte s'arrête au dernier mot complet avant la limite et ajoute « … » en cas de troncature. Le texte d'entrée est d'abord normalisé (pour éviter les anomalies liées aux espaces en début ou en fin de ligne). Renvoie la chaîne d'origine si celle-ci respecte déjà la limite.

truncateByWords
- Limite le texte à un nombre maximal de mots et ajoute « … » en cas de troncature. Cette option est utile lorsque vous souhaitez que le nombre de mots soit uniforme sur l'ensemble d'une grille de cartes, plutôt que de baser la taille sur le nombre de caractères.

normalizeWhitespace
- Compresse tous les espaces internes (espaces multiples, tabulations, sauts de ligne) en espaces simples et supprime les espaces en début et en fin de ligne. Doit être appelé avant la génération des extraits lorsque les données proviennent de corps de messages saisis par l'utilisateur.

