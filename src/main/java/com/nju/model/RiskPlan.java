package com.nju.model;

/**
 * Created by Zongyi on 2016/11/19.
 */
public class RiskPlan {

    private int riskPlanId;
    private String riskPlanName;
    private String riskPlanCreator;
    private String riskPlanContent;
    private String riskPlanCreatedTime;


    public RiskPlan(int riskPlanId, String riskPlanName, String riskPlanCreator,String riskPlanContent, String riskPlanCreatedTime) {
        this.riskPlanId = riskPlanId;
        this.riskPlanName = riskPlanName;
        this.riskPlanCreator = riskPlanCreator;
        this.riskPlanContent = riskPlanContent;
        this.riskPlanCreatedTime = riskPlanCreatedTime;
    }

    public String getRiskPlanContent() {
        return riskPlanContent;
    }

    public void setRiskPlanContent(String riskPlanContent) {
        this.riskPlanContent = riskPlanContent;
    }

    public int getRiskPlanId() {
        return riskPlanId;
    }

    public void setRiskPlanId(int riskPlanId) {
        this.riskPlanId = riskPlanId;
    }

    public String getRiskPlanName() {
        return riskPlanName;
    }

    public void setRiskPlanName(String riskPlanName) {
        this.riskPlanName = riskPlanName;
    }

    public String getRiskPlanCreator() {
        return riskPlanCreator;
    }

    public void setRiskPlanCreator(String riskPlanCreator) {
        this.riskPlanCreator = riskPlanCreator;
    }

    public String getRiskPlanCreatedTime() {
        return riskPlanCreatedTime;
    }

    public void setRiskPlanCreatedTime(String riskPlanCreatedTime) {
        this.riskPlanCreatedTime = riskPlanCreatedTime;
    }
}
