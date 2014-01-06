package org.local.controller;

import org.codehaus.jackson.map.ObjectMapper;
import org.local.model.Pricing;
import org.local.rules.PricingRulesHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/pricing")
public class PricingController {
	@RequestMapping(value="/list", method = RequestMethod.GET)
	public @ResponseBody Pricing[] getListJSON() throws Exception {
 
//		Pricing[] list = new Pricing[1];
//		Pricing p = new Pricing();
//		p.setCustomerId("customer");
//		p.setShipperId("shipper");
//		p.setDestinationZipCode("destination");
//		p.setOriginId("origin");
//		p.setPrice("price");
//		p.setPayable("payable");
//		list[0]=p;
//		return list;
		return new PricingRulesHelper().getList();
	}
	@RequestMapping(value="/add", method = RequestMethod.POST)
	public @ResponseBody String addJSON(@RequestBody Object pricingObj) {
		ObjectMapper mapper = new ObjectMapper();
		Pricing pricing = mapper.convertValue(pricingObj, Pricing.class);
		return "success";
	}
	@RequestMapping(value="/update", method = RequestMethod.POST)
	public @ResponseBody String updateJSON(@RequestBody Object pricingObj) {
		ObjectMapper mapper = new ObjectMapper();
		if(pricingObj.toString().startsWith("[")){
			Pricing[] pricingList = mapper.convertValue(pricingObj, Pricing[].class);
			System.out.println("Record Count:"+pricingList.length);
		} else{
			Pricing pricing = mapper.convertValue(pricingObj, Pricing.class);
		}
		return "success";
	}
	@RequestMapping(value="/delete", method = RequestMethod.POST)
	public @ResponseBody String deleteJSON(@RequestBody Object pricingObj) {
		ObjectMapper mapper = new ObjectMapper();
		Pricing pricing = mapper.convertValue(pricingObj, Pricing.class);
		return "success";
	}
}
