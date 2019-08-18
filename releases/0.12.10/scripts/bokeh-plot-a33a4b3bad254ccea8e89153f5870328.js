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
      };var element = document.getElementById("3b13baef-4184-4472-b868-e32e9d04706e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3b13baef-4184-4472-b868-e32e9d04706e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"e330c4d4-db97-4cfb-9050-cec5ef086010":{"roots":{"references":[{"attributes":{},"id":"1dd04375-a465-4872-8c72-ef5fbd7a7d52","type":"ResetTool"},{"attributes":{"data_source":{"id":"7808a5ed-cc1d-4ad8-aa9a-1f1c502d7516","type":"ColumnDataSource"},"glyph":{"id":"6d36fc75-0515-434d-b4c6-d169ddb19d83","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cd9126f5-77fc-45ac-87b1-93060ec78d9c","type":"Square"},"selection_glyph":null,"view":{"id":"ef4d9c13-e18d-46c2-83ba-5b929a76199a","type":"CDSView"}},"id":"8372397b-88ec-4acc-b80d-1e12286e4c32","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"492aabd7-d8ad-48e7-a0a9-6d8a3b2f950e","type":"Line"},{"attributes":{"formatter":{"id":"dd8c97dd-45ee-4718-8663-dc3de1d2f4e7","type":"BasicTickFormatter"},"plot":{"id":"8ee2c477-c4a5-4ee0-a279-b73b32ae08b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"99488356-3c43-4966-83f9-6e1e99e9ff5b","type":"BasicTicker"}},"id":"c557f6f6-b0f5-4c9d-992b-7e2e2df13a72","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"8fad9dc6-0854-4d48-ad16-e29c7649bf51","type":"ColumnDataSource"},{"attributes":{},"id":"99488356-3c43-4966-83f9-6e1e99e9ff5b","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb2c493f-8024-4e9e-93cf-123dac49c461","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"86407fc0-02a5-4459-8afa-8143a7537fb5","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"92f2b9ce-8089-4cd0-b74e-a14eb8812e2a","type":"BoxAnnotation"}},"id":"b2aac781-2afa-47f4-8691-5b9c33f66b0f","type":"BoxZoomTool"},{"attributes":{"label":{"value":"sin(x)"},"renderers":[{"id":"4e6fcc76-eb9d-45c0-abcb-b3eb87bc6f9f","type":"GlyphRenderer"},{"id":"e37c6201-ef44-49fa-9aa4-6d0f8a18598b","type":"GlyphRenderer"}]},"id":"418dc9bf-9cfc-47e1-9482-616e20a9e7c5","type":"LegendItem"},{"attributes":{},"id":"688ad609-6fe3-4637-b290-cbfd5ff986cf","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"8fad9dc6-0854-4d48-ad16-e29c7649bf51","type":"ColumnDataSource"},"glyph":{"id":"e5040a57-3590-4888-9f8f-b423e4fee0a4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ee4c8161-f195-422c-a2e1-e0642f80a8f0","type":"Circle"},"selection_glyph":null,"view":{"id":"5b29b894-614b-4576-a12a-74d900e8c975","type":"CDSView"}},"id":"4e6fcc76-eb9d-45c0-abcb-b3eb87bc6f9f","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2*sin(x)"},"renderers":[{"id":"c6248c2a-fd3f-4210-bf06-c8d72bd17f91","type":"GlyphRenderer"}]},"id":"082029ee-5588-4355-a1cf-3048bfae83c0","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee4c8161-f195-422c-a2e1-e0642f80a8f0","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"92f2b9ce-8089-4cd0-b74e-a14eb8812e2a","type":"BoxAnnotation"},{"attributes":{"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"31935936-e3c1-4117-a0be-1aff985b7fc1","type":"Line"},{"attributes":{"plot":null,"text":""},"id":"84e860f1-a001-4bf7-87bd-41090d0636ce","type":"Title"},{"attributes":{"data_source":{"id":"c38d6ebd-40d1-4366-9415-101357abcb4e","type":"ColumnDataSource"},"glyph":{"id":"31935936-e3c1-4117-a0be-1aff985b7fc1","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"492aabd7-d8ad-48e7-a0a9-6d8a3b2f950e","type":"Line"},"selection_glyph":null,"view":{"id":"0689e9dc-28fe-4643-97d6-000263b57c4b","type":"CDSView"}},"id":"8b4a42f1-93be-4a0c-a001-7ff45b7a6065","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"e058e398-8bb2-49e3-b4a0-b47637e9ee69","type":"LinearAxis"}],"left":[{"id":"c557f6f6-b0f5-4c9d-992b-7e2e2df13a72","type":"LinearAxis"}],"renderers":[{"id":"e058e398-8bb2-49e3-b4a0-b47637e9ee69","type":"LinearAxis"},{"id":"bb72476e-03f7-4a65-8933-552b7f597921","type":"Grid"},{"id":"c557f6f6-b0f5-4c9d-992b-7e2e2df13a72","type":"LinearAxis"},{"id":"8e84802b-4315-41c5-8b39-481282c41b9b","type":"Grid"},{"id":"92f2b9ce-8089-4cd0-b74e-a14eb8812e2a","type":"BoxAnnotation"},{"id":"a6c7aafe-05a5-4ca8-971b-7ca5b64aaa23","type":"Legend"},{"id":"4e6fcc76-eb9d-45c0-abcb-b3eb87bc6f9f","type":"GlyphRenderer"},{"id":"e37c6201-ef44-49fa-9aa4-6d0f8a18598b","type":"GlyphRenderer"},{"id":"c6248c2a-fd3f-4210-bf06-c8d72bd17f91","type":"GlyphRenderer"},{"id":"8372397b-88ec-4acc-b80d-1e12286e4c32","type":"GlyphRenderer"},{"id":"8b4a42f1-93be-4a0c-a001-7ff45b7a6065","type":"GlyphRenderer"}],"title":{"id":"84e860f1-a001-4bf7-87bd-41090d0636ce","type":"Title"},"toolbar":{"id":"0de6f9bc-9493-494c-9e7b-357ce8f10f22","type":"Toolbar"},"x_range":{"id":"6c866886-ce45-4f0d-89ec-c4dd0daec404","type":"DataRange1d"},"x_scale":{"id":"5976ab15-eb8d-4728-a1f6-d6e60e44e2d5","type":"LinearScale"},"y_range":{"id":"8c65c260-adbb-4406-8226-3735f02cb191","type":"DataRange1d"},"y_scale":{"id":"ada0526d-9207-4edd-8125-639695567087","type":"LinearScale"}},"id":"8ee2c477-c4a5-4ee0-a279-b73b32ae08b8","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"7888de86-f27c-4796-9ab2-7c743caba8c0","type":"ColumnDataSource"},"glyph":{"id":"f7a900ab-52d6-4188-8f9b-25fac89d4b9f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3f08246d-ae03-4960-9d70-d974bd6668db","type":"Line"},"selection_glyph":null,"view":{"id":"8296649f-600b-415f-8c65-ffbb45483ce6","type":"CDSView"}},"id":"c6248c2a-fd3f-4210-bf06-c8d72bd17f91","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d005888-298f-46c5-885e-ed4b13177448","type":"Line"},{"attributes":{"plot":{"id":"8ee2c477-c4a5-4ee0-a279-b73b32ae08b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"7832792d-2dde-461c-bb0e-83c48ab25b28","type":"BasicTicker"}},"id":"bb72476e-03f7-4a65-8933-552b7f597921","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e5040a57-3590-4888-9f8f-b423e4fee0a4","type":"Circle"},{"attributes":{},"id":"5976ab15-eb8d-4728-a1f6-d6e60e44e2d5","type":"LinearScale"},{"attributes":{},"id":"2ac23105-ad0f-456c-acc6-bb57894b3007","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"86407fc0-02a5-4459-8afa-8143a7537fb5","type":"ColumnDataSource"},"glyph":{"id":"8d005888-298f-46c5-885e-ed4b13177448","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb2c493f-8024-4e9e-93cf-123dac49c461","type":"Line"},"selection_glyph":null,"view":{"id":"a4860d01-64e4-42e2-8f99-1bee2c99493a","type":"CDSView"}},"id":"e37c6201-ef44-49fa-9aa4-6d0f8a18598b","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7888de86-f27c-4796-9ab2-7c743caba8c0","type":"ColumnDataSource"}},"id":"8296649f-600b-415f-8c65-ffbb45483ce6","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"8ee2c477-c4a5-4ee0-a279-b73b32ae08b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"99488356-3c43-4966-83f9-6e1e99e9ff5b","type":"BasicTicker"}},"id":"8e84802b-4315-41c5-8b39-481282c41b9b","type":"Grid"},{"attributes":{},"id":"49c2a472-87c7-467d-b275-a6f1291991ac","type":"PanTool"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f7a900ab-52d6-4188-8f9b-25fac89d4b9f","type":"Line"},{"attributes":{},"id":"dd8c97dd-45ee-4718-8663-dc3de1d2f4e7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2ac23105-ad0f-456c-acc6-bb57894b3007","type":"BasicTickFormatter"},"plot":{"id":"8ee2c477-c4a5-4ee0-a279-b73b32ae08b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"7832792d-2dde-461c-bb0e-83c48ab25b28","type":"BasicTicker"}},"id":"e058e398-8bb2-49e3-b4a0-b47637e9ee69","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAeZ5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+uSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/J7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMfGzMMGMA8AkU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzJJEDPTWsg/aoF44Akr4j/QL7OxiPTtP1+wo+NRofQ/FAQZ9WTz+T8oIVr7ktr+PyVTbtpUoQFAMPGzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8MHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+n710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b846WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9e5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"7808a5ed-cc1d-4ad8-aa9a-1f1c502d7516","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f08246d-ae03-4960-9d70-d974bd6668db","type":"Line"},{"attributes":{"source":{"id":"c38d6ebd-40d1-4366-9415-101357abcb4e","type":"ColumnDataSource"}},"id":"0689e9dc-28fe-4643-97d6-000263b57c4b","type":"CDSView"},{"attributes":{},"id":"f4fa3f59-34f3-4224-a0eb-7d176b4176b2","type":"HelpTool"},{"attributes":{"label":{"value":"3*sin(x)"},"renderers":[{"id":"8372397b-88ec-4acc-b80d-1e12286e4c32","type":"GlyphRenderer"},{"id":"8b4a42f1-93be-4a0c-a001-7ff45b7a6065","type":"GlyphRenderer"}]},"id":"f5b143f5-c3a6-4df9-916b-cbf5bd87d25e","type":"LegendItem"},{"attributes":{"items":[{"id":"418dc9bf-9cfc-47e1-9482-616e20a9e7c5","type":"LegendItem"},{"id":"082029ee-5588-4355-a1cf-3048bfae83c0","type":"LegendItem"},{"id":"f5b143f5-c3a6-4df9-916b-cbf5bd87d25e","type":"LegendItem"}],"orientation":"horizontal","plot":{"id":"8ee2c477-c4a5-4ee0-a279-b73b32ae08b8","subtype":"Figure","type":"Plot"}},"id":"a6c7aafe-05a5-4ca8-971b-7ca5b64aaa23","type":"Legend"},{"attributes":{},"id":"7832792d-2dde-461c-bb0e-83c48ab25b28","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTQP5qI2QHPEuA/+5MNU1HJ5z8ZTT7q2B3vP0aFmgwa+fI/ABg/lCAV9j+IQCEcMdb4P3fOhmLzMPs/EyzujrQb/T/9Izwlj47+PxccgYyLg/8/g6xao7j2/z9mZrL8O+b/P7+X94FZUv8/xVNiW3I9/j9RB8Ai+6v8P5FWKYlppPo/oSg6uxkv+D/Th2bxK1b1PyZGRbpaJfI/8qg+VZVT7T/4C4p0qOPlP+UppLIiM9w/3FNHxZdVyD/J23zJpD6wv+3ENsZjOdS/wo12/ecH4r/dgWKM2Kjpv2MTsJELcPC/83ixWvXH87+358MBZM72v5eCD4nhdvm/rExY6Hq2+7+TIxAn7YP9vwSssILL1/6/70I4BJ6s/7/vOc8G+P7/vzTGy1KGzf+/3176khQZ/7/C8a4NiuT9vzGcHq/dNPy/l0FFlgER+r+FGZN4xoH3vx8WPFK3kfS/Cli7+O1M8b+HQNqEwoHrv9kfIiFb+OO/gKyggGI52L8EhrXMjDzAvyGGtcyMPMA/jqyggGI52D/gHyIhW/jjP39A2oTCges/DVi7+O1M8T8bFjxSt5H0P4cZk3jGgfc/lUFFlgER+j8ynB6v3TT8P8Hxrg2K5P0/4F76khQZ/z80xstShs3/P+85zwb4/v8/8EI4BJ6s/z8DrLCCy9f+P5UjECftg/0/p0xY6Hq2+z+Vgg+J4Xb5P7fnwwFkzvY/9nixWvXH8z9dE7CRC3DwP9eBYozYqOk/w412/ecH4j/+xDbGYznUP0/bfMmkPrA/+FNHxZdVyL/UKaSyIjPcv+gLinSo4+W/+Kg+VZVT7b8lRkW6WiXyv8+HZvErVvW/pig6uxkv+L+TVimJaaT6v1EHwCL7q/y/xFNiW3I9/r/Al/eBWVL/v2Zmsvw75v+/g6xao7j2/78YHIGMi4P/v/sjPCWPjv6/EyzujrQb/b94zoZi8zD7v4xAIRwx1vi//Bc/lCAV9r9GhZoMGvnyvx9NPurYHe+/65MNU1HJ57+SiNkBzxLgv/GDAnguNNC/B1wUMyam0bw=","dtype":"float64","shape":[100]}}},"id":"7888de86-f27c-4796-9ab2-7c743caba8c0","type":"ColumnDataSource"},{"attributes":{},"id":"ada0526d-9207-4edd-8125-639695567087","type":"LinearScale"},{"attributes":{"callback":null},"id":"8c65c260-adbb-4406-8226-3735f02cb191","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"49c2a472-87c7-467d-b275-a6f1291991ac","type":"PanTool"},{"id":"688ad609-6fe3-4637-b290-cbfd5ff986cf","type":"WheelZoomTool"},{"id":"b2aac781-2afa-47f4-8691-5b9c33f66b0f","type":"BoxZoomTool"},{"id":"6de81485-6496-4837-bef4-9ec400dd8df0","type":"SaveTool"},{"id":"1dd04375-a465-4872-8c72-ef5fbd7a7d52","type":"ResetTool"},{"id":"f4fa3f59-34f3-4224-a0eb-7d176b4176b2","type":"HelpTool"}]},"id":"0de6f9bc-9493-494c-9e7b-357ce8f10f22","type":"Toolbar"},{"attributes":{"source":{"id":"7808a5ed-cc1d-4ad8-aa9a-1f1c502d7516","type":"ColumnDataSource"}},"id":"ef4d9c13-e18d-46c2-83ba-5b929a76199a","type":"CDSView"},{"attributes":{},"id":"6de81485-6496-4837-bef4-9ec400dd8df0","type":"SaveTool"},{"attributes":{"source":{"id":"86407fc0-02a5-4459-8afa-8143a7537fb5","type":"ColumnDataSource"}},"id":"a4860d01-64e4-42e2-8f99-1bee2c99493a","type":"CDSView"},{"attributes":{"source":{"id":"8fad9dc6-0854-4d48-ad16-e29c7649bf51","type":"ColumnDataSource"}},"id":"5b29b894-614b-4576-a12a-74d900e8c975","type":"CDSView"},{"attributes":{"callback":null},"id":"6c866886-ce45-4f0d-89ec-c4dd0daec404","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd9126f5-77fc-45ac-87b1-93060ec78d9c","type":"Square"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAeZ5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+uSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/J7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMfGzMMGMA8AkU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzJJEDPTWsg/aoF44Akr4j/QL7OxiPTtP1+wo+NRofQ/FAQZ9WTz+T8oIVr7ktr+PyVTbtpUoQFAMPGzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8MHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+n710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b846WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9e5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"c38d6ebd-40d1-4366-9415-101357abcb4e","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6d36fc75-0515-434d-b4c6-d169ddb19d83","type":"Square"}],"root_ids":["8ee2c477-c4a5-4ee0-a279-b73b32ae08b8"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e330c4d4-db97-4cfb-9050-cec5ef086010","elementid":"3b13baef-4184-4472-b868-e32e9d04706e","modelid":"8ee2c477-c4a5-4ee0-a279-b73b32ae08b8"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
