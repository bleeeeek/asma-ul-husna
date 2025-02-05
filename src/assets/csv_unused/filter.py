import pandas as pd

def merge_csv_files():
    # Read both CSV files
    df1 = pd.read_csv('project/src/assets/csv/filtered_namesofAllah.csv')
    df2 = pd.read_csv('project/src/assets/csv/filtered_namesofAllah2.csv')
    
    # Merge the dataframes on the '#' column
    merged_df = pd.merge(
        df1,
        df2[['#', 'Meaning (Arabic)', 'Meaning (English)']],
        on='#',
        how='left'
    )
    
    # Save the merged dataframe to a new CSV file
    merged_df.to_csv('project/src/assets/csv/99_names_of_Allah.csv', index=False)

if __name__ == "__main__":
    merge_csv_files()
