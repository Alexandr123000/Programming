def season(month):
    month_season = 'No season'
    seasons = {
        (12, 1, 2) : 'Winter',
        (3, 4, 5) : 'Spring',
        (6, 7, 8) : 'Summer',
        (9, 10, 11) : 'Autumn'
    }
   
    for temp_month, temp_season in seasons.items(): #searching for a season
        if month in temp_month:
            month_season = temp_season
            break
    
    return month_season
    
print('A season: ' + season(7))
