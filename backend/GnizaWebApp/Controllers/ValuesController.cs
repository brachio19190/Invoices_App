using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using magical_kingdom;
using Microsoft.AspNetCore.Mvc;

namespace magical_kingdom.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {


        [HttpGet]
        public int GetPlaceTable()
        {
            return 33;
        }


        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {

            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }
      
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
