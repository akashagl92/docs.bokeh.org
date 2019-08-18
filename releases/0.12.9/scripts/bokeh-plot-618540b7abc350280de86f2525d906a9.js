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
      };var element = document.getElementById("3ae1d875-6d5d-434a-a895-5a1576a7535d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3ae1d875-6d5d-434a-a895-5a1576a7535d' but no matching script tag was found. ")
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
                    var docs_json = {"04842799-77fd-42a0-9d6a-a960ae39f536":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d73c9335-99cd-47d3-bfa8-6f4ad7009b39","type":"BoxAnnotation"},{"attributes":{},"id":"be46a0f3-6c4f-4681-8dc0-57a64d8a0e60","type":"BasicTicker"},{"attributes":{},"id":"406c4c1e-1b69-4230-aacb-a4226ed2665d","type":"PanTool"},{"attributes":{"source":{"id":"83fdc55e-1e13-48bd-a991-08b04179514d","type":"ColumnDataSource"}},"id":"813f01d0-f0aa-4bbc-9a68-2da12a3804ca","type":"CDSView"},{"attributes":{},"id":"8fddea09-a4ed-449b-978f-828b2bcf8f05","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"ec912d8c-b5cd-4117-a7a6-b033eab8b0ce","type":"DataRange1d"},{"attributes":{"overlay":{"id":"d73c9335-99cd-47d3-bfa8-6f4ad7009b39","type":"BoxAnnotation"}},"id":"885a6f72-abf1-4e18-9465-6e7df958035e","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oig6uxkv6D/Sh2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/I23zJpD6gv+3ENsZjOcS/wo12/ecH0r/egWKM2KjZv2MTsJELcOC/83ixWvXH47+258MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/mEFFlgER6r+EGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyCGtcyMPLA/jqyggGI5yD/gHyIhW/jTP4BA2oTCgds/Dli7+O1M4T8cFjxSt5HkP4cZk3jGgec/lEFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9cE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+VNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8mRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx5NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"83fdc55e-1e13-48bd-a991-08b04179514d","type":"ColumnDataSource"},{"attributes":{},"id":"2baa15da-a05b-44b4-b2ae-dc421631646f","type":"SaveTool"},{"attributes":{"below":[{"id":"5a7c0599-7e93-4b22-8295-e75ab57af73c","type":"LinearAxis"}],"left":[{"id":"09a07930-cb75-4e49-b353-12fdb1a44b61","type":"LinearAxis"}],"renderers":[{"id":"5a7c0599-7e93-4b22-8295-e75ab57af73c","type":"LinearAxis"},{"id":"2e1d239f-ba79-424f-8335-280f01b2e97e","type":"Grid"},{"id":"09a07930-cb75-4e49-b353-12fdb1a44b61","type":"LinearAxis"},{"id":"7c29f03a-3576-4ba8-be96-b4b5b8e47160","type":"Grid"},{"id":"d73c9335-99cd-47d3-bfa8-6f4ad7009b39","type":"BoxAnnotation"},{"id":"02e0dbb0-6287-47c1-9098-3024747c5dee","type":"Legend"},{"id":"2e093a91-2ba8-428c-9d53-b80fb01464e6","type":"GlyphRenderer"},{"id":"8cbbc859-c635-49ae-ba02-2515113507d3","type":"GlyphRenderer"},{"id":"c167b7b2-129f-4c9d-a698-7b089bdc4e26","type":"GlyphRenderer"},{"id":"38da2ba6-fd7b-4de6-a00f-0fbe54b661bd","type":"GlyphRenderer"},{"id":"e7c3e6a5-6270-4d91-90bd-9dc82ab8d254","type":"GlyphRenderer"}],"title":{"id":"3366a3ff-7fbb-4157-90af-9fa42c798c75","type":"Title"},"toolbar":{"id":"ac171997-b6ba-4582-b4ca-ae005474b1fb","type":"Toolbar"},"x_range":{"id":"086ebb52-2ef7-45fd-931d-302c54b5e8da","type":"DataRange1d"},"x_scale":{"id":"012c50c4-6210-488b-aee2-b850173df630","type":"LinearScale"},"y_range":{"id":"ec912d8c-b5cd-4117-a7a6-b033eab8b0ce","type":"DataRange1d"},"y_scale":{"id":"ddfa99ef-b767-4d4a-944c-1b892cf7d641","type":"LinearScale"}},"id":"f435683c-484e-49c2-9b3e-f3956c8ad13d","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e88081aa-2651-4749-96e5-c304de939e96","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42ca2729-a07e-481d-825f-a50473c4e7af","type":"Line"},{"attributes":{},"id":"ae2f8d7e-104f-458a-88cb-fdd8fcacfcee","type":"ResetTool"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ed92a25c-4740-46c4-9aa1-793df6776b97","type":"Line"},{"attributes":{"source":{"id":"0311b333-54a4-422c-a336-899be5152a11","type":"ColumnDataSource"}},"id":"2dac5261-747d-47da-98a7-b2b085eb717a","type":"CDSView"},{"attributes":{},"id":"652a6d98-fed5-41a1-89bd-3acce0e80433","type":"HelpTool"},{"attributes":{"items":[{"id":"acf0fb1a-1ecc-4579-9f43-1ae7d5656cf5","type":"LegendItem"},{"id":"b9790362-c9ba-4ec8-9d6f-af30d81cb33d","type":"LegendItem"},{"id":"f4a75bf8-dd41-4ed4-8552-259d7f5ebea3","type":"LegendItem"}],"plot":{"id":"f435683c-484e-49c2-9b3e-f3956c8ad13d","subtype":"Figure","type":"Plot"}},"id":"02e0dbb0-6287-47c1-9098-3024747c5dee","type":"Legend"},{"attributes":{},"id":"012c50c4-6210-488b-aee2-b850173df630","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"406c4c1e-1b69-4230-aacb-a4226ed2665d","type":"PanTool"},{"id":"8fddea09-a4ed-449b-978f-828b2bcf8f05","type":"WheelZoomTool"},{"id":"885a6f72-abf1-4e18-9465-6e7df958035e","type":"BoxZoomTool"},{"id":"2baa15da-a05b-44b4-b2ae-dc421631646f","type":"SaveTool"},{"id":"ae2f8d7e-104f-458a-88cb-fdd8fcacfcee","type":"ResetTool"},{"id":"652a6d98-fed5-41a1-89bd-3acce0e80433","type":"HelpTool"}]},"id":"ac171997-b6ba-4582-b4ca-ae005474b1fb","type":"Toolbar"},{"attributes":{},"id":"2482730d-d321-4304-8f1f-d993d53c8ba8","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"sin(x)"},"renderers":[{"id":"2e093a91-2ba8-428c-9d53-b80fb01464e6","type":"GlyphRenderer"},{"id":"8cbbc859-c635-49ae-ba02-2515113507d3","type":"GlyphRenderer"}]},"id":"acf0fb1a-1ecc-4579-9f43-1ae7d5656cf5","type":"LegendItem"},{"attributes":{"plot":null,"text":""},"id":"3366a3ff-7fbb-4157-90af-9fa42c798c75","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oig6uxkv6D/Sh2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/I23zJpD6gv+3ENsZjOcS/wo12/ecH0r/egWKM2KjZv2MTsJELcOC/83ixWvXH47+258MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/mEFFlgER6r+EGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyCGtcyMPLA/jqyggGI5yD/gHyIhW/jTP4BA2oTCgds/Dli7+O1M4T8cFjxSt5HkP4cZk3jGgec/lEFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9cE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+VNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8mRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx5NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"91bc7cd9-cc4e-4a4c-96d6-d21ea9fbe379","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"086ebb52-2ef7-45fd-931d-302c54b5e8da","type":"DataRange1d"},{"attributes":{"formatter":{"id":"2482730d-d321-4304-8f1f-d993d53c8ba8","type":"BasicTickFormatter"},"plot":{"id":"f435683c-484e-49c2-9b3e-f3956c8ad13d","subtype":"Figure","type":"Plot"},"ticker":{"id":"be46a0f3-6c4f-4681-8dc0-57a64d8a0e60","type":"BasicTicker"}},"id":"09a07930-cb75-4e49-b353-12fdb1a44b61","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTQP5qI2QHPEuA/+5MNU1HJ5z8ZTT7q2B3vP0aFmgwa+fI/ABg/lCAV9j+IQCEcMdb4P3fOhmLzMPs/EyzujrQb/T/9Izwlj47+PxccgYyLg/8/g6xao7j2/z9mZrL8O+b/P7+X94FZUv8/xVNiW3I9/j9RB8Ai+6v8P5FWKYlppPo/oig6uxkv+D/Sh2bxK1b1PyZGRbpaJfI/8qg+VZVT7T/4C4p0qOPlP+UppLIiM9w/3FNHxZdVyD/I23zJpD6wv+3ENsZjOdS/wo12/ecH4r/egWKM2Kjpv2MTsJELcPC/83ixWvXH87+258MBZM72v5eCD4nhdvm/rExY6Hq2+7+TIxAn7YP9vwSssILL1/6/70I4BJ6s/7/vOc8G+P7/vzTGy1KGzf+/3176khQZ/7/C8a4NiuT9vzGcHq/dNPy/mEFFlgER+r+EGZN4xoH3vx8WPFK3kfS/Cli7+O1M8b+HQNqEwoHrv9kfIiFb+OO/gKyggGI52L8EhrXMjDzAvyCGtcyMPMA/jqyggGI52D/gHyIhW/jjP4BA2oTCges/Dli7+O1M8T8cFjxSt5H0P4cZk3jGgfc/lEFFlgER+j8ynB6v3TT8P8Hxrg2K5P0/4F76khQZ/z80xstShs3/P+85zwb4/v8/8EI4BJ6s/z8DrLCCy9f+P5UjECftg/0/p0xY6Hq2+z+Vgg+J4Xb5P7fnwwFkzvY/9nixWvXH8z9cE7CRC3DwP9eBYozYqOk/w412/ecH4j/+xDbGYznUP0/bfMmkPrA/+VNHxZdVyL/UKaSyIjPcv+gLinSo4+W/+Kg+VZVT7b8mRkW6WiXyv8+HZvErVvW/pig6uxkv+L+TVimJaaT6v1EHwCL7q/y/xFNiW3I9/r/Al/eBWVL/v2Zmsvw75v+/g6xao7j2/78YHIGMi4P/v/sjPCWPjv6/EyzujrQb/b94zoZi8zD7v4xAIRwx1vi//Bc/lCAV9r9GhZoMGvnyvx5NPurYHe+/65MNU1HJ57+SiNkBzxLgv/GDAnguNNC/B1wUMyam0bw=","dtype":"float64","shape":[100]}}},"id":"0311b333-54a4-422c-a336-899be5152a11","type":"ColumnDataSource"},{"attributes":{},"id":"33df40a8-5482-4a44-8846-c0ec9eddc7c7","type":"BasicTicker"},{"attributes":{},"id":"ddfa99ef-b767-4d4a-944c-1b892cf7d641","type":"LinearScale"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"25e5b372-f4e8-4a9e-9d65-586bc3cc0fff","type":"Line"},{"attributes":{"data_source":{"id":"d30bd5bc-632c-4d89-9a30-6b15735eb8d4","type":"ColumnDataSource"},"glyph":{"id":"5e605c3b-44ca-4eaf-a303-9e5e90a6ce07","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6fa852c5-acf9-412a-835a-7cd8d80db70a","type":"Square"},"selection_glyph":null,"view":{"id":"67c7e270-b120-4ae3-90c0-21ffe81ba124","type":"CDSView"}},"id":"38da2ba6-fd7b-4de6-a00f-0fbe54b661bd","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"60feec25-dac3-4664-9cf0-69b607334582","type":"Line"},{"attributes":{"data_source":{"id":"91bc7cd9-cc4e-4a4c-96d6-d21ea9fbe379","type":"ColumnDataSource"},"glyph":{"id":"25e5b372-f4e8-4a9e-9d65-586bc3cc0fff","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42ca2729-a07e-481d-825f-a50473c4e7af","type":"Line"},"selection_glyph":null,"view":{"id":"abebacd3-c636-433d-96c8-8f2f4c8c1c9e","type":"CDSView"}},"id":"8cbbc859-c635-49ae-ba02-2515113507d3","type":"GlyphRenderer"},{"attributes":{"source":{"id":"91bc7cd9-cc4e-4a4c-96d6-d21ea9fbe379","type":"ColumnDataSource"}},"id":"abebacd3-c636-433d-96c8-8f2f4c8c1c9e","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e605c3b-44ca-4eaf-a303-9e5e90a6ce07","type":"Square"},{"attributes":{"data_source":{"id":"0311b333-54a4-422c-a336-899be5152a11","type":"ColumnDataSource"},"glyph":{"id":"ed92a25c-4740-46c4-9aa1-793df6776b97","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"60feec25-dac3-4664-9cf0-69b607334582","type":"Line"},"selection_glyph":null,"view":{"id":"2dac5261-747d-47da-98a7-b2b085eb717a","type":"CDSView"}},"id":"c167b7b2-129f-4c9d-a698-7b089bdc4e26","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f435683c-484e-49c2-9b3e-f3956c8ad13d","subtype":"Figure","type":"Plot"},"ticker":{"id":"33df40a8-5482-4a44-8846-c0ec9eddc7c7","type":"BasicTicker"}},"id":"2e1d239f-ba79-424f-8335-280f01b2e97e","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAep5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+sSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/I7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMvGzMMGMA8AjU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzBJEDPTWsg/aoF44Akr4j/QL7OxiPTtP2Cwo+NRofQ/FQQZ9WTz+T8qIVr7ktr+PyVTbtpUoQFAL/GzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8KHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+3710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b856WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9a5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"d30bd5bc-632c-4d89-9a30-6b15735eb8d4","type":"ColumnDataSource"},{"attributes":{"source":{"id":"d30bd5bc-632c-4d89-9a30-6b15735eb8d4","type":"ColumnDataSource"}},"id":"67c7e270-b120-4ae3-90c0-21ffe81ba124","type":"CDSView"},{"attributes":{"label":{"value":"2*sin(x)"},"renderers":[{"id":"c167b7b2-129f-4c9d-a698-7b089bdc4e26","type":"GlyphRenderer"}]},"id":"b9790362-c9ba-4ec8-9d6f-af30d81cb33d","type":"LegendItem"},{"attributes":{"dimension":1,"plot":{"id":"f435683c-484e-49c2-9b3e-f3956c8ad13d","subtype":"Figure","type":"Plot"},"ticker":{"id":"be46a0f3-6c4f-4681-8dc0-57a64d8a0e60","type":"BasicTicker"}},"id":"7c29f03a-3576-4ba8-be96-b4b5b8e47160","type":"Grid"},{"attributes":{"label":{"value":"3*sin(x)"},"renderers":[{"id":"38da2ba6-fd7b-4de6-a00f-0fbe54b661bd","type":"GlyphRenderer"},{"id":"e7c3e6a5-6270-4d91-90bd-9dc82ab8d254","type":"GlyphRenderer"}]},"id":"f4a75bf8-dd41-4ed4-8552-259d7f5ebea3","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAep5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+sSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/I7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMvGzMMGMA8AjU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzBJEDPTWsg/aoF44Akr4j/QL7OxiPTtP2Cwo+NRofQ/FQQZ9WTz+T8qIVr7ktr+PyVTbtpUoQFAL/GzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8KHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+3710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b856WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9a5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"5787b1b3-4602-409a-a9df-e2ad8d8a3872","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"021cf1ff-82ed-466a-b2fa-d4165a7463b7","type":"Circle"},{"attributes":{"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e598592-fab7-4cfe-ab73-741e08d4a2d5","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6fa852c5-acf9-412a-835a-7cd8d80db70a","type":"Square"},{"attributes":{"data_source":{"id":"5787b1b3-4602-409a-a9df-e2ad8d8a3872","type":"ColumnDataSource"},"glyph":{"id":"9e598592-fab7-4cfe-ab73-741e08d4a2d5","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6b719564-9a3d-4daa-8c74-96bf8cf668c8","type":"Line"},"selection_glyph":null,"view":{"id":"a7f8ed95-9e3a-4505-acad-7fe64bf8aea7","type":"CDSView"}},"id":"e7c3e6a5-6270-4d91-90bd-9dc82ab8d254","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b719564-9a3d-4daa-8c74-96bf8cf668c8","type":"Line"},{"attributes":{"source":{"id":"5787b1b3-4602-409a-a9df-e2ad8d8a3872","type":"ColumnDataSource"}},"id":"a7f8ed95-9e3a-4505-acad-7fe64bf8aea7","type":"CDSView"},{"attributes":{"formatter":{"id":"cd147f92-cc1c-4733-8237-f8ae60c0d274","type":"BasicTickFormatter"},"plot":{"id":"f435683c-484e-49c2-9b3e-f3956c8ad13d","subtype":"Figure","type":"Plot"},"ticker":{"id":"33df40a8-5482-4a44-8846-c0ec9eddc7c7","type":"BasicTicker"}},"id":"5a7c0599-7e93-4b22-8295-e75ab57af73c","type":"LinearAxis"},{"attributes":{"data_source":{"id":"83fdc55e-1e13-48bd-a991-08b04179514d","type":"ColumnDataSource"},"glyph":{"id":"e88081aa-2651-4749-96e5-c304de939e96","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"021cf1ff-82ed-466a-b2fa-d4165a7463b7","type":"Circle"},"selection_glyph":null,"view":{"id":"813f01d0-f0aa-4bbc-9a68-2da12a3804ca","type":"CDSView"}},"id":"2e093a91-2ba8-428c-9d53-b80fb01464e6","type":"GlyphRenderer"},{"attributes":{},"id":"cd147f92-cc1c-4733-8237-f8ae60c0d274","type":"BasicTickFormatter"}],"root_ids":["f435683c-484e-49c2-9b3e-f3956c8ad13d"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"04842799-77fd-42a0-9d6a-a960ae39f536","elementid":"3ae1d875-6d5d-434a-a895-5a1576a7535d","modelid":"f435683c-484e-49c2-9b3e-f3956c8ad13d"}];
                
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
