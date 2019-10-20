(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("d45c8750-6def-4a21-8a18-c7e9cbf16929");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd45c8750-6def-4a21-8a18-c7e9cbf16929' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"95c17807-40ba-4e30-a909-dfd55d43a424":{"roots":{"references":[{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f8dce21d-d48e-4e02-b2a8-95c73145f46a","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d665455b-1a82-4490-bef2-4121c2adcfe3","type":"Square"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb02a3be-e757-4a90-82b2-04002ac74038","type":"Circle"},{"attributes":{"formatter":{"id":"a734f9b9-0bd5-4a0d-ae40-d72291fc1b0a","type":"BasicTickFormatter"},"plot":{"id":"8ea80bcf-1c3f-4a20-9b67-f2babe14740e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0e192c2-1c08-4a23-a55d-613163843e17","type":"BasicTicker"}},"id":"3774e100-6afe-48b1-b2f9-5fa1c4537efa","type":"LinearAxis"},{"attributes":{"source":{"id":"ed26e0ac-2003-454a-813f-56868343699e","type":"ColumnDataSource"}},"id":"73d1ed54-804e-4984-bd42-77040b7d11b9","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oig6uxkv6D/Sh2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/I23zJpD6gv+3ENsZjOcS/wo12/ecH0r/egWKM2KjZv2MTsJELcOC/83ixWvXH47+258MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/mEFFlgER6r+EGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyCGtcyMPLA/jqyggGI5yD/gHyIhW/jTP4BA2oTCgds/Dli7+O1M4T8cFjxSt5HkP4cZk3jGgec/lEFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9cE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+VNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8mRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx5NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"03680005-66de-43e8-b256-f828359d0db6","type":"ColumnDataSource"},{"attributes":{},"id":"443604ab-000b-435a-a7f3-59251bb92ded","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oig6uxkv6D/Sh2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/I23zJpD6gv+3ENsZjOcS/wo12/ecH0r/egWKM2KjZv2MTsJELcOC/83ixWvXH47+258MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/mEFFlgER6r+EGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyCGtcyMPLA/jqyggGI5yD/gHyIhW/jTP4BA2oTCgds/Dli7+O1M4T8cFjxSt5HkP4cZk3jGgec/lEFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9cE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+VNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8mRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx5NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"d9181479-9599-4ae0-bbb5-92e2724e8952","type":"ColumnDataSource"},{"attributes":{},"id":"61497b2d-8a90-4615-bf38-6c022f4b0bec","type":"ResetTool"},{"attributes":{},"id":"91af9566-1318-477e-8141-90d0dbecd211","type":"SaveTool"},{"attributes":{"data_source":{"id":"d9181479-9599-4ae0-bbb5-92e2724e8952","type":"ColumnDataSource"},"glyph":{"id":"5d43c9f2-49eb-4928-9a8a-cddc7131763b","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26736ca9-c023-4d23-80f1-354e4ae0ce01","type":"Line"},"selection_glyph":null,"view":{"id":"fcf3458a-1d57-4c2c-9ebf-8ed9dcb7d7bc","type":"CDSView"}},"id":"123648c0-60d6-4fb7-91e2-520ba8be7b0c","type":"GlyphRenderer"},{"attributes":{},"id":"28501bc1-5534-4b04-a280-282eb07b03cf","type":"PanTool"},{"attributes":{"source":{"id":"d9181479-9599-4ae0-bbb5-92e2724e8952","type":"ColumnDataSource"}},"id":"fcf3458a-1d57-4c2c-9ebf-8ed9dcb7d7bc","type":"CDSView"},{"attributes":{"data_source":{"id":"03680005-66de-43e8-b256-f828359d0db6","type":"ColumnDataSource"},"glyph":{"id":"eb02a3be-e757-4a90-82b2-04002ac74038","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"efdccb61-0a77-48c9-8652-69d02df53a9c","type":"Circle"},"selection_glyph":null,"view":{"id":"a3043bbb-b56d-4883-8d56-cd73684d4955","type":"CDSView"}},"id":"6182c30d-119a-442b-927f-e2312c965548","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAep5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+sSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/I7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMvGzMMGMA8AjU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzBJEDPTWsg/aoF44Akr4j/QL7OxiPTtP2Cwo+NRofQ/FQQZ9WTz+T8qIVr7ktr+PyVTbtpUoQFAL/GzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8KHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+3710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b856WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9a5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"19f95718-61d2-4dc7-b2f0-41f3f7b0f7ec","type":"ColumnDataSource"},{"attributes":{},"id":"f0e192c2-1c08-4a23-a55d-613163843e17","type":"BasicTicker"},{"attributes":{"label":{"value":"2*sin(x)"},"renderers":[{"id":"bc4f97ae-d8bb-4a9d-a91a-b789ce50d621","type":"GlyphRenderer"}]},"id":"398dd6cd-9e7d-4182-bc96-6111d9b29037","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"efdccb61-0a77-48c9-8652-69d02df53a9c","type":"Circle"},{"attributes":{"source":{"id":"03680005-66de-43e8-b256-f828359d0db6","type":"ColumnDataSource"}},"id":"a3043bbb-b56d-4883-8d56-cd73684d4955","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTQP5qI2QHPEuA/+5MNU1HJ5z8ZTT7q2B3vP0aFmgwa+fI/ABg/lCAV9j+IQCEcMdb4P3fOhmLzMPs/EyzujrQb/T/9Izwlj47+PxccgYyLg/8/g6xao7j2/z9mZrL8O+b/P7+X94FZUv8/xVNiW3I9/j9RB8Ai+6v8P5FWKYlppPo/oig6uxkv+D/Sh2bxK1b1PyZGRbpaJfI/8qg+VZVT7T/4C4p0qOPlP+UppLIiM9w/3FNHxZdVyD/I23zJpD6wv+3ENsZjOdS/wo12/ecH4r/egWKM2Kjpv2MTsJELcPC/83ixWvXH87+258MBZM72v5eCD4nhdvm/rExY6Hq2+7+TIxAn7YP9vwSssILL1/6/70I4BJ6s/7/vOc8G+P7/vzTGy1KGzf+/3176khQZ/7/C8a4NiuT9vzGcHq/dNPy/mEFFlgER+r+EGZN4xoH3vx8WPFK3kfS/Cli7+O1M8b+HQNqEwoHrv9kfIiFb+OO/gKyggGI52L8EhrXMjDzAvyCGtcyMPMA/jqyggGI52D/gHyIhW/jjP4BA2oTCges/Dli7+O1M8T8cFjxSt5H0P4cZk3jGgfc/lEFFlgER+j8ynB6v3TT8P8Hxrg2K5P0/4F76khQZ/z80xstShs3/P+85zwb4/v8/8EI4BJ6s/z8DrLCCy9f+P5UjECftg/0/p0xY6Hq2+z+Vgg+J4Xb5P7fnwwFkzvY/9nixWvXH8z9cE7CRC3DwP9eBYozYqOk/w412/ecH4j/+xDbGYznUP0/bfMmkPrA/+VNHxZdVyL/UKaSyIjPcv+gLinSo4+W/+Kg+VZVT7b8mRkW6WiXyv8+HZvErVvW/pig6uxkv+L+TVimJaaT6v1EHwCL7q/y/xFNiW3I9/r/Al/eBWVL/v2Zmsvw75v+/g6xao7j2/78YHIGMi4P/v/sjPCWPjv6/EyzujrQb/b94zoZi8zD7v4xAIRwx1vi//Bc/lCAV9r9GhZoMGvnyvx5NPurYHe+/65MNU1HJ57+SiNkBzxLgv/GDAnguNNC/B1wUMyam0bw=","dtype":"float64","shape":[100]}}},"id":"ed26e0ac-2003-454a-813f-56868343699e","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8012beeb-fe2a-47d2-b40f-1a167d7674fb","type":"ColumnDataSource"}},"id":"f9461719-1f40-4fe8-9a9d-ed748db7ee9b","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26736ca9-c023-4d23-80f1-354e4ae0ce01","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAep5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+sSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/I7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMvGzMMGMA8AjU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzBJEDPTWsg/aoF44Akr4j/QL7OxiPTtP2Cwo+NRofQ/FQQZ9WTz+T8qIVr7ktr+PyVTbtpUoQFAL/GzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8KHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+3710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b856WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9a5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"8012beeb-fe2a-47d2-b40f-1a167d7674fb","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"68c1f6cf-095c-4867-b0bd-23888b5b2de3","type":"BasicTickFormatter"},"plot":{"id":"8ea80bcf-1c3f-4a20-9b67-f2babe14740e","subtype":"Figure","type":"Plot"},"ticker":{"id":"443604ab-000b-435a-a7f3-59251bb92ded","type":"BasicTicker"}},"id":"2cb5e0d0-8704-4549-8951-0b1a67bf553b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"c2b5aefd-1884-45a1-bee5-29c71477f2a6","type":"DataRange1d"},{"attributes":{"label":{"value":"3*sin(x)"},"renderers":[{"id":"35645e7d-f50d-4b28-b8c4-85c925e36f97","type":"GlyphRenderer"},{"id":"7c46ab11-5dbb-44cb-8510-a2e9266c53e3","type":"GlyphRenderer"}]},"id":"d1b909ea-ff76-44b3-8574-03eda236f746","type":"LegendItem"},{"attributes":{},"id":"81563c2d-b50f-4435-8f78-7c93961be773","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"8ea80bcf-1c3f-4a20-9b67-f2babe14740e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0e192c2-1c08-4a23-a55d-613163843e17","type":"BasicTicker"}},"id":"71cb8e45-6198-42f1-86eb-601ca3372fee","type":"Grid"},{"attributes":{"data_source":{"id":"8012beeb-fe2a-47d2-b40f-1a167d7674fb","type":"ColumnDataSource"},"glyph":{"id":"7525b102-b703-4515-ad60-602a1913baca","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5fd00f6a-3e4a-4944-a7f4-c2c9a69d184d","type":"Line"},"selection_glyph":null,"view":{"id":"f9461719-1f40-4fe8-9a9d-ed748db7ee9b","type":"CDSView"}},"id":"7c46ab11-5dbb-44cb-8510-a2e9266c53e3","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19f95718-61d2-4dc7-b2f0-41f3f7b0f7ec","type":"ColumnDataSource"},"glyph":{"id":"eb5201a1-144c-4649-bb60-d274a9d670ef","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d665455b-1a82-4490-bef2-4121c2adcfe3","type":"Square"},"selection_glyph":null,"view":{"id":"9d78ebb3-229f-4a89-aa92-bed65b74c001","type":"CDSView"}},"id":"35645e7d-f50d-4b28-b8c4-85c925e36f97","type":"GlyphRenderer"},{"attributes":{},"id":"0e9f3ca3-de4c-4d72-bcf9-c8e68df3746c","type":"HelpTool"},{"attributes":{"items":[{"id":"ea8c4a7b-47d2-4026-b7d8-51c796c48fa2","type":"LegendItem"},{"id":"398dd6cd-9e7d-4182-bc96-6111d9b29037","type":"LegendItem"},{"id":"d1b909ea-ff76-44b3-8574-03eda236f746","type":"LegendItem"}],"location":"bottom_left","plot":{"id":"8ea80bcf-1c3f-4a20-9b67-f2babe14740e","subtype":"Figure","type":"Plot"}},"id":"0a9bded5-5a00-43da-b095-eef39a77418c","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12807913-d4f6-4c25-b86a-76485dcc09d5","type":"BoxAnnotation"},{"attributes":{"source":{"id":"19f95718-61d2-4dc7-b2f0-41f3f7b0f7ec","type":"ColumnDataSource"}},"id":"9d78ebb3-229f-4a89-aa92-bed65b74c001","type":"CDSView"},{"attributes":{"overlay":{"id":"12807913-d4f6-4c25-b86a-76485dcc09d5","type":"BoxAnnotation"}},"id":"60f8a131-d08b-47ab-bfeb-2dedb59f4843","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"7e46f9fd-9016-4866-a3cb-93bdca9cf66f","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"28501bc1-5534-4b04-a280-282eb07b03cf","type":"PanTool"},{"id":"119bde64-c5bb-4e1f-a084-8dfb6b954023","type":"WheelZoomTool"},{"id":"60f8a131-d08b-47ab-bfeb-2dedb59f4843","type":"BoxZoomTool"},{"id":"91af9566-1318-477e-8141-90d0dbecd211","type":"SaveTool"},{"id":"61497b2d-8a90-4615-bf38-6c022f4b0bec","type":"ResetTool"},{"id":"0e9f3ca3-de4c-4d72-bcf9-c8e68df3746c","type":"HelpTool"}]},"id":"decd9dc8-900d-49c9-977e-9b135d26d0bc","type":"Toolbar"},{"attributes":{},"id":"68c1f6cf-095c-4867-b0bd-23888b5b2de3","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"2cb5e0d0-8704-4549-8951-0b1a67bf553b","type":"LinearAxis"}],"left":[{"id":"3774e100-6afe-48b1-b2f9-5fa1c4537efa","type":"LinearAxis"}],"renderers":[{"id":"2cb5e0d0-8704-4549-8951-0b1a67bf553b","type":"LinearAxis"},{"id":"8aad4b4c-9a80-4564-8ae6-f167ef9bab41","type":"Grid"},{"id":"3774e100-6afe-48b1-b2f9-5fa1c4537efa","type":"LinearAxis"},{"id":"71cb8e45-6198-42f1-86eb-601ca3372fee","type":"Grid"},{"id":"12807913-d4f6-4c25-b86a-76485dcc09d5","type":"BoxAnnotation"},{"id":"0a9bded5-5a00-43da-b095-eef39a77418c","type":"Legend"},{"id":"6182c30d-119a-442b-927f-e2312c965548","type":"GlyphRenderer"},{"id":"123648c0-60d6-4fb7-91e2-520ba8be7b0c","type":"GlyphRenderer"},{"id":"bc4f97ae-d8bb-4a9d-a91a-b789ce50d621","type":"GlyphRenderer"},{"id":"35645e7d-f50d-4b28-b8c4-85c925e36f97","type":"GlyphRenderer"},{"id":"7c46ab11-5dbb-44cb-8510-a2e9266c53e3","type":"GlyphRenderer"}],"title":{"id":"b1302e4b-7428-4c6f-ad3c-8ceca22fa190","type":"Title"},"toolbar":{"id":"decd9dc8-900d-49c9-977e-9b135d26d0bc","type":"Toolbar"},"x_range":{"id":"c2b5aefd-1884-45a1-bee5-29c71477f2a6","type":"DataRange1d"},"x_scale":{"id":"534fcfd8-72cd-48cc-a16e-e9e57bc2f77e","type":"LinearScale"},"y_range":{"id":"7e46f9fd-9016-4866-a3cb-93bdca9cf66f","type":"DataRange1d"},"y_scale":{"id":"81563c2d-b50f-4435-8f78-7c93961be773","type":"LinearScale"}},"id":"8ea80bcf-1c3f-4a20-9b67-f2babe14740e","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d43c9f2-49eb-4928-9a8a-cddc7131763b","type":"Line"},{"attributes":{"label":{"value":"sin(x)"},"renderers":[{"id":"6182c30d-119a-442b-927f-e2312c965548","type":"GlyphRenderer"},{"id":"123648c0-60d6-4fb7-91e2-520ba8be7b0c","type":"GlyphRenderer"}]},"id":"ea8c4a7b-47d2-4026-b7d8-51c796c48fa2","type":"LegendItem"},{"attributes":{"plot":{"id":"8ea80bcf-1c3f-4a20-9b67-f2babe14740e","subtype":"Figure","type":"Plot"},"ticker":{"id":"443604ab-000b-435a-a7f3-59251bb92ded","type":"BasicTicker"}},"id":"8aad4b4c-9a80-4564-8ae6-f167ef9bab41","type":"Grid"},{"attributes":{},"id":"a734f9b9-0bd5-4a0d-ae40-d72291fc1b0a","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"b1302e4b-7428-4c6f-ad3c-8ceca22fa190","type":"Title"},{"attributes":{},"id":"119bde64-c5bb-4e1f-a084-8dfb6b954023","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f4a2861-41d3-4ff2-89dc-35f8cfc54526","type":"Line"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb5201a1-144c-4649-bb60-d274a9d670ef","type":"Square"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5fd00f6a-3e4a-4944-a7f4-c2c9a69d184d","type":"Line"},{"attributes":{"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7525b102-b703-4515-ad60-602a1913baca","type":"Line"},{"attributes":{"data_source":{"id":"ed26e0ac-2003-454a-813f-56868343699e","type":"ColumnDataSource"},"glyph":{"id":"f8dce21d-d48e-4e02-b2a8-95c73145f46a","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3f4a2861-41d3-4ff2-89dc-35f8cfc54526","type":"Line"},"selection_glyph":null,"view":{"id":"73d1ed54-804e-4984-bd42-77040b7d11b9","type":"CDSView"}},"id":"bc4f97ae-d8bb-4a9d-a91a-b789ce50d621","type":"GlyphRenderer"},{"attributes":{},"id":"534fcfd8-72cd-48cc-a16e-e9e57bc2f77e","type":"LinearScale"}],"root_ids":["8ea80bcf-1c3f-4a20-9b67-f2babe14740e"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"95c17807-40ba-4e30-a909-dfd55d43a424","elementid":"d45c8750-6def-4a21-8a18-c7e9cbf16929","modelid":"8ea80bcf-1c3f-4a20-9b67-f2babe14740e"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
