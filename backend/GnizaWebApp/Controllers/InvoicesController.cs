using Invoice.DATA;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
//using InvoicesData.services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Invoice.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class InvoicesController : ControllerBase
    {
        Service_Invoices _Service_Invoices = new Service_Invoices();
        // GET: api/<InvoicesController>
        //[HttpGet] 
        public List<InvoiceItem> GetInvoices()
        {
          
            return _Service_Invoices.GetInvoicesList();
        }

        //http://localhost:54903/api/Invoices/InsertInvoice?data=rge&status=wow2&amount=68
        public void InsertInvoice( string date, string status, int amount)
        {
          
             _Service_Invoices.InsertNewInvoice( date, status, amount);
        }

        //http://localhost:54903/api/Invoices/UpdateInvoiceById?id=1&data=222222&status=wow&amount=6
        public void UpdateInvoiceById(int id, string date, string status, int amount)
        {
          
             _Service_Invoices.UpdateInvoiceItem(id, date, status, amount);
        }
        ////http://localhost:54903/api/Invoices/DeleteInvoice?id=4
        public void DeleteInvoice (int id)
        {
            _Service_Invoices.DeleteInvoiceItem(id);
        }

        // GET api/<InvoicesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<InvoicesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<InvoicesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<InvoicesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
