package org.local.rules;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.local.model.Pricing;

public class PricingRulesHelper {

	public Pricing[] getList() throws Exception{
		List<Pricing> list = new ArrayList<Pricing>();
		FileInputStream file = new FileInputStream(new File("/Users/Srihitha/git/activiti-drools-plugin/src/main/resources/org/cargotel/drools/rules/metro rates.xls"));
		             
		//Get the workbook instance for XLS file
		HSSFWorkbook workbook = new HSSFWorkbook(file);
		 
		//Get first sheet from the workbook
		HSSFSheet sheet = workbook.getSheetAt(0);
		
		 
		//Get iterator to all the rows in current sheet
		Iterator<Row> rowIterator = sheet.iterator();
		int rowId = 0;
		while (rowIterator.hasNext()) {
			Row row = (Row) rowIterator.next();
			rowId++;
			if (rowId < 10)
				continue;
			//Get iterator to all cells of current row
			int cellId = 0;
			Iterator<Cell> cellIterator = row.cellIterator();
			Pricing p = null;
			while (cellIterator.hasNext()) {
				Cell cell = (Cell) cellIterator.next();
				cellId++;
				if(cellId == 1) continue;
				String cellVal = cell.toString();
				if(cellId == 2){
					p = new Pricing();
					list.add(p);
					p.setDestinationZipCode(cellVal);
				}
				if(cellId == 3){
					p.setShipperId(cellVal);
				}
				if(cellId == 4){
					p.setOriginId(cellVal);
				}
				if(cellId == 5){
					p.setTaskName(cellVal);
				}
				if(cellId == 6){
					p.setCustomerId(cellVal);
				}
				if(cellId == 7){
					p.setPrice(cellVal);
				}
				if(cellId == 8){
					p.setPayable(cellVal);
				}
			}
		}
	    file.close();
	    return list.toArray(new Pricing[list.size()]);
	}
	public static void main(String[] args) throws Exception {
		new PricingRulesHelper().getList();
	}
}
