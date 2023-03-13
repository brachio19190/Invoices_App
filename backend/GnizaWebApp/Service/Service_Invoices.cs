using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json.Linq;
using Invoice.DATA;

namespace Invoice
{
    public class Service_Invoices
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger
            (System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public List<InvoiceItem> GetInvoicesList()
        {
            List<InvoiceItem> Invoiceslist = new List<InvoiceItem>();
            try
            {
                using (StreamReader r = new StreamReader("jsonDB/Invoices.json"))
                {
                    string json = r.ReadToEnd();
                    List<InvoiceItem> invoices = JsonConvert.DeserializeObject<List<InvoiceItem>>(json);
                    Invoiceslist = invoices;
                } ;
                return Invoiceslist;
            }
            catch (Exception ex)
            {
                log.Error(ex.Message);

                return null;
            }
           
               
        }
        //public List<Streets_Data> GetStreets()
        //{
        //    List<Streets_Data> Streetslist = new List<Streets_Data>();
        //    try
        //    {
        //        using (StreamReader r = new StreamReader("jsonDB/Streets.json"))
        //        {
        //            string json = r.ReadToEnd();
        //            List<Streets_Data> Streets = JsonConvert.DeserializeObject<List<Streets_Data>>(json);
        //            Streetslist = Streets;
        //        } ;
        //        return Streetslist;
        //    }
        //    catch (Exception ex)
        //    {
        //        log.Error(ex.Message);

        //        return null;
        //    }
        //}

        public void InsertNewInvoice(string Date, string Status, int Amount)
        {
            try
            {
                var initialJson = File.ReadAllText("jsonDB/Invoices.json");

                var array = JArray.Parse(initialJson);
                int num = array.Select(obj => obj["InvoiceId"].Value<int>()).LastOrDefault();
                var itemToAdd = new JObject();
                itemToAdd["InvoiceId"] = num + 1;
                itemToAdd["Date"] = Date;
                itemToAdd["Status"] = Status;
                itemToAdd["Amount"] = Amount;

                array.Add(itemToAdd);

                var jsonToOutput = JsonConvert.SerializeObject(array, Formatting.Indented);
                File.WriteAllText("jsonDB/Invoices.json", jsonToOutput);

                log.Info(": Insert New Invoice is successfully");

            }
            catch (Exception ex)
            {
                log.Error(": Insert New Invoice Get Erro: " + ex.Message);
            }
            finally
            {
                log.Info(": Insert New Invoice is finish");
            }

        }
        public void UpdateInvoiceItem(int invoiceId, string date,string status ,int amount)
        {

            try
            {
                string jsonString = File.ReadAllText("jsonDB/Invoices.json");
                var array = JArray.Parse(jsonString);


                var companyToDeleted = array.Where(obj => obj["InvoiceId"].Value<int>() == invoiceId).FirstOrDefault();

                JToken jToken = companyToDeleted.SelectToken("Date");
                jToken.Replace(date);

                 jToken = companyToDeleted.SelectToken("Status");
                jToken.Replace(status);
                 jToken = companyToDeleted.SelectToken("Amount");
                jToken.Replace(amount);

                string updatedJsonString = JsonConvert.SerializeObject(array, Formatting.Indented);
                File.WriteAllText("jsonDB/Invoices.json", updatedJsonString);

                log.Info(": UpdateInvoice is successfully");

            }
            catch (Exception ex)
            {
                log.Error(": UpdateInvoice Get Erro: " + ex.Message);
            }
            finally
            {
                log.Info(": UpdateInvoice is finish");
            }
        }

        public void DeleteInvoiceItem(int invoiceId)
        {
            try
            {
                string jsonString = File.ReadAllText("jsonDB/Invoices.json");
                var arr = JArray.Parse(jsonString);

                var companyToDeleted = arr.Where(obj => obj["InvoiceId"].Value<int>() == invoiceId).ToList();

                foreach (var item in companyToDeleted)
                {
                    arr.Remove(item);
                }
                string updatedJsonString = JsonConvert.SerializeObject(arr, Formatting.Indented);
                File.WriteAllText("jsonDB/Invoices.json", updatedJsonString);

                log.Info(": Delete Invoice is successfully");

            }
            catch (Exception ex)
            {
                log.Error(": Delete Invoice Get Erro: " + ex.Message);
            }
            finally
            {
                log.Info(": Delete invoice is finish");
            }
        }

    }
}
