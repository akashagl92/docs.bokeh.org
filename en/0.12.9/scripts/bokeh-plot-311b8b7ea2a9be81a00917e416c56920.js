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
      };var element = document.getElementById("049a192b-7306-47c1-bdff-1907a9264660");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '049a192b-7306-47c1-bdff-1907a9264660' but no matching script tag was found. ")
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
                    var docs_json = {"27e86628-e588-4658-92fe-8911fa1284bc":{"roots":{"references":[{"attributes":{},"id":"00fdfbcf-25ac-4dd6-bb2a-78c5fdb75571","type":"PanTool"},{"attributes":{},"id":"3be357b7-1b6c-4f20-8f24-eac415b535a2","type":"ResetTool"},{"attributes":{"data_source":{"id":"4d91b18d-412c-4525-90ea-7a26647eb1e8","type":"ColumnDataSource"},"glyph":{"id":"05744c00-aa5f-4195-85fd-9d32fd71c5c0","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"204b73d1-6f47-4025-ae80-e2d9575817c5","type":"Line"},"selection_glyph":null,"view":{"id":"863c9c37-3e97-4e40-9040-3d17a2e7a5b4","type":"CDSView"}},"id":"6b4abf39-8ea0-46f1-a75a-f4b7551ebb56","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7afe1ed6-3ba7-4db4-a0e7-110d30bb4ca9","type":"ColumnDataSource"}},"id":"d1a6b126-72f8-49fb-975a-f84cf9e4c6f1","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e7c00dd1-2d08-48a3-b3aa-9b9470918ca2","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"7afe1ed6-3ba7-4db4-a0e7-110d30bb4ca9","type":"ColumnDataSource"},"glyph":{"id":"13d96301-1df8-4bc4-aed7-d0c5a90bfce6","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f473d93c-e2bb-44d5-bcb4-b830596c9302","type":"Line"},"selection_glyph":null,"view":{"id":"d1a6b126-72f8-49fb-975a-f84cf9e4c6f1","type":"CDSView"}},"id":"c5906464-7400-481c-b328-91d02ea7959f","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"05744c00-aa5f-4195-85fd-9d32fd71c5c0","type":"Line"},{"attributes":{},"id":"46663d00-1496-4af7-b6fd-2f6c583f7677","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"74842386-11aa-4ff0-ab5d-66f0241eee06","type":"ColumnDataSource"}},"id":"d6d18acd-1f90-42a2-8b67-180f77ae086f","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f473d93c-e2bb-44d5-bcb4-b830596c9302","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"204b73d1-6f47-4025-ae80-e2d9575817c5","type":"Line"},{"attributes":{},"id":"153f3f75-311f-4177-b7cf-df212c631b6d","type":"LinearScale"},{"attributes":{"formatter":{"id":"46663d00-1496-4af7-b6fd-2f6c583f7677","type":"BasicTickFormatter"},"plot":{"id":"ae569d87-f1f3-456c-a8cf-4d2f34d7ab7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"738ef8db-fcc2-4d93-a23d-2b62e3a9d21e","type":"BasicTicker"}},"id":"73070e9e-a09d-4e4e-82b9-b52f2cf50d0f","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oig6uxkv6D/Sh2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/I23zJpD6gv+3ENsZjOcS/wo12/ecH0r/egWKM2KjZv2MTsJELcOC/83ixWvXH47+258MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/mEFFlgER6r+EGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyCGtcyMPLA/jqyggGI5yD/gHyIhW/jTP4BA2oTCgds/Dli7+O1M4T8cFjxSt5HkP4cZk3jGgec/lEFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9cE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+VNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8mRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx5NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"74842386-11aa-4ff0-ab5d-66f0241eee06","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"729d8c50-1ab4-4e33-b12e-29596cc6cc01","type":"BasicTickFormatter"},"plot":{"id":"ae569d87-f1f3-456c-a8cf-4d2f34d7ab7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"99e54ec9-5f37-48b5-8f55-2233e9d65a6d","type":"BasicTicker"}},"id":"b8053ba8-f762-44a3-b8e8-7de4e258c8b1","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2a8f196b-95d8-4139-8043-c6efd245b175","type":"DataRange1d"},{"attributes":{"label":{"value":"sin(x)"},"renderers":[{"id":"8cd2214d-9e3d-44f3-bcce-bab1d76a6c4f","type":"GlyphRenderer"},{"id":"c5906464-7400-481c-b328-91d02ea7959f","type":"GlyphRenderer"}]},"id":"6f6f94d9-5a1f-40a3-9f07-d4f7dd727abd","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAep5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+sSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/I7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMvGzMMGMA8AjU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzBJEDPTWsg/aoF44Akr4j/QL7OxiPTtP2Cwo+NRofQ/FQQZ9WTz+T8qIVr7ktr+PyVTbtpUoQFAL/GzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8KHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+3710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b856WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9a5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"4d91b18d-412c-4525-90ea-7a26647eb1e8","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"cadffe0b-1afc-4101-acf1-b680cf185e63","type":"ColumnDataSource"},"glyph":{"id":"734ec91c-3889-4f16-a2ee-1d2436b61b76","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2dc5b6b6-311d-4dd9-9d8d-83fb859b74b2","type":"Square"},"selection_glyph":null,"view":{"id":"4cb1bac1-2664-4eeb-a284-d568f520bd22","type":"CDSView"}},"id":"e5cc8c15-bbb1-445b-a0c8-120bdf3ef834","type":"GlyphRenderer"},{"attributes":{"label":{"value":"3*sin(x)"},"renderers":[{"id":"e5cc8c15-bbb1-445b-a0c8-120bdf3ef834","type":"GlyphRenderer"},{"id":"6b4abf39-8ea0-46f1-a75a-f4b7551ebb56","type":"GlyphRenderer"}]},"id":"ff1880f4-f677-4e2f-b0b6-5b1a27ebd29d","type":"LegendItem"},{"attributes":{},"id":"738ef8db-fcc2-4d93-a23d-2b62e3a9d21e","type":"BasicTicker"},{"attributes":{},"id":"80fca570-bf0b-4766-8519-80df4dfe86e3","type":"HelpTool"},{"attributes":{},"id":"99e54ec9-5f37-48b5-8f55-2233e9d65a6d","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"96255c5d-e809-4473-8614-9978c146f945","type":"Line"},{"attributes":{"below":[{"id":"b8053ba8-f762-44a3-b8e8-7de4e258c8b1","type":"LinearAxis"}],"left":[{"id":"73070e9e-a09d-4e4e-82b9-b52f2cf50d0f","type":"LinearAxis"}],"renderers":[{"id":"b8053ba8-f762-44a3-b8e8-7de4e258c8b1","type":"LinearAxis"},{"id":"e46b8244-1503-4245-8cb8-0658cfcca59e","type":"Grid"},{"id":"73070e9e-a09d-4e4e-82b9-b52f2cf50d0f","type":"LinearAxis"},{"id":"f53240da-c7fd-4241-994a-d8db87b930b1","type":"Grid"},{"id":"e7c00dd1-2d08-48a3-b3aa-9b9470918ca2","type":"BoxAnnotation"},{"id":"02d5b94f-064f-4473-8cdd-fb34e2de8788","type":"Legend"},{"id":"8cd2214d-9e3d-44f3-bcce-bab1d76a6c4f","type":"GlyphRenderer"},{"id":"c5906464-7400-481c-b328-91d02ea7959f","type":"GlyphRenderer"},{"id":"4b8e0129-e0c6-4bbc-8af5-ce93b9134f41","type":"GlyphRenderer"},{"id":"e5cc8c15-bbb1-445b-a0c8-120bdf3ef834","type":"GlyphRenderer"},{"id":"6b4abf39-8ea0-46f1-a75a-f4b7551ebb56","type":"GlyphRenderer"}],"title":{"id":"f1ab053d-2f29-4110-ae04-106173915cf2","type":"Title"},"toolbar":{"id":"d85a315c-8cd9-43db-9ebb-9d29b9ad7bf8","type":"Toolbar"},"x_range":{"id":"2a8f196b-95d8-4139-8043-c6efd245b175","type":"DataRange1d"},"x_scale":{"id":"7a0c4580-2ba7-4ba3-8ed1-a0c6f1cbb3f4","type":"LinearScale"},"y_range":{"id":"6523b438-ebab-47e3-a9e1-143d113fea77","type":"DataRange1d"},"y_scale":{"id":"153f3f75-311f-4177-b7cf-df212c631b6d","type":"LinearScale"}},"id":"ae569d87-f1f3-456c-a8cf-4d2f34d7ab7b","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTQP5qI2QHPEuA/+5MNU1HJ5z8ZTT7q2B3vP0aFmgwa+fI/ABg/lCAV9j+IQCEcMdb4P3fOhmLzMPs/EyzujrQb/T/9Izwlj47+PxccgYyLg/8/g6xao7j2/z9mZrL8O+b/P7+X94FZUv8/xVNiW3I9/j9RB8Ai+6v8P5FWKYlppPo/oig6uxkv+D/Sh2bxK1b1PyZGRbpaJfI/8qg+VZVT7T/4C4p0qOPlP+UppLIiM9w/3FNHxZdVyD/I23zJpD6wv+3ENsZjOdS/wo12/ecH4r/egWKM2Kjpv2MTsJELcPC/83ixWvXH87+258MBZM72v5eCD4nhdvm/rExY6Hq2+7+TIxAn7YP9vwSssILL1/6/70I4BJ6s/7/vOc8G+P7/vzTGy1KGzf+/3176khQZ/7/C8a4NiuT9vzGcHq/dNPy/mEFFlgER+r+EGZN4xoH3vx8WPFK3kfS/Cli7+O1M8b+HQNqEwoHrv9kfIiFb+OO/gKyggGI52L8EhrXMjDzAvyCGtcyMPMA/jqyggGI52D/gHyIhW/jjP4BA2oTCges/Dli7+O1M8T8cFjxSt5H0P4cZk3jGgfc/lEFFlgER+j8ynB6v3TT8P8Hxrg2K5P0/4F76khQZ/z80xstShs3/P+85zwb4/v8/8EI4BJ6s/z8DrLCCy9f+P5UjECftg/0/p0xY6Hq2+z+Vgg+J4Xb5P7fnwwFkzvY/9nixWvXH8z9cE7CRC3DwP9eBYozYqOk/w412/ecH4j/+xDbGYznUP0/bfMmkPrA/+VNHxZdVyL/UKaSyIjPcv+gLinSo4+W/+Kg+VZVT7b8mRkW6WiXyv8+HZvErVvW/pig6uxkv+L+TVimJaaT6v1EHwCL7q/y/xFNiW3I9/r/Al/eBWVL/v2Zmsvw75v+/g6xao7j2/78YHIGMi4P/v/sjPCWPjv6/EyzujrQb/b94zoZi8zD7v4xAIRwx1vi//Bc/lCAV9r9GhZoMGvnyvx5NPurYHe+/65MNU1HJ57+SiNkBzxLgv/GDAnguNNC/B1wUMyam0bw=","dtype":"float64","shape":[100]}}},"id":"b489af1c-64e8-477d-a0b7-f3d00e7cca8c","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"734ec91c-3889-4f16-a2ee-1d2436b61b76","type":"Square"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"00fdfbcf-25ac-4dd6-bb2a-78c5fdb75571","type":"PanTool"},{"id":"4b68b1a1-ed80-4bb5-91ac-e21c14de2579","type":"WheelZoomTool"},{"id":"e51b78fb-1b9b-40c4-a3ca-98ee2e53a0c7","type":"BoxZoomTool"},{"id":"99316575-9308-4957-8f52-4c572435bf29","type":"SaveTool"},{"id":"3be357b7-1b6c-4f20-8f24-eac415b535a2","type":"ResetTool"},{"id":"80fca570-bf0b-4766-8519-80df4dfe86e3","type":"HelpTool"}]},"id":"d85a315c-8cd9-43db-9ebb-9d29b9ad7bf8","type":"Toolbar"},{"attributes":{},"id":"4b68b1a1-ed80-4bb5-91ac-e21c14de2579","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"f1ab053d-2f29-4110-ae04-106173915cf2","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"ae569d87-f1f3-456c-a8cf-4d2f34d7ab7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"738ef8db-fcc2-4d93-a23d-2b62e3a9d21e","type":"BasicTicker"}},"id":"f53240da-c7fd-4241-994a-d8db87b930b1","type":"Grid"},{"attributes":{"label":{"value":"2*sin(x)"},"renderers":[{"id":"4b8e0129-e0c6-4bbc-8af5-ce93b9134f41","type":"GlyphRenderer"}]},"id":"9201884c-7b74-429a-812e-09e1c1009ef1","type":"LegendItem"},{"attributes":{"source":{"id":"4d91b18d-412c-4525-90ea-7a26647eb1e8","type":"ColumnDataSource"}},"id":"863c9c37-3e97-4e40-9040-3d17a2e7a5b4","type":"CDSView"},{"attributes":{},"id":"99316575-9308-4957-8f52-4c572435bf29","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAep5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+sSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/I7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMvGzMMGMA8AjU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzBJEDPTWsg/aoF44Akr4j/QL7OxiPTtP2Cwo+NRofQ/FQQZ9WTz+T8qIVr7ktr+PyVTbtpUoQFAL/GzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8KHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+3710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b856WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9a5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"cadffe0b-1afc-4101-acf1-b680cf185e63","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"94fcea27-e1bd-4a56-960f-1a39d2d9fbf9","type":"Circle"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13d96301-1df8-4bc4-aed7-d0c5a90bfce6","type":"Line"},{"attributes":{},"id":"7a0c4580-2ba7-4ba3-8ed1-a0c6f1cbb3f4","type":"LinearScale"},{"attributes":{"data_source":{"id":"b489af1c-64e8-477d-a0b7-f3d00e7cca8c","type":"ColumnDataSource"},"glyph":{"id":"901970f7-7f03-4ea1-a0d3-da6d7e96f515","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96255c5d-e809-4473-8614-9978c146f945","type":"Line"},"selection_glyph":null,"view":{"id":"fa6c7c0c-22ec-4ac5-b00f-1e8285f57af7","type":"CDSView"}},"id":"4b8e0129-e0c6-4bbc-8af5-ce93b9134f41","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"74842386-11aa-4ff0-ab5d-66f0241eee06","type":"ColumnDataSource"},"glyph":{"id":"94fcea27-e1bd-4a56-960f-1a39d2d9fbf9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fc8d885f-746e-4ebc-93b5-2fc3d865b3b9","type":"Circle"},"selection_glyph":null,"view":{"id":"d6d18acd-1f90-42a2-8b67-180f77ae086f","type":"CDSView"}},"id":"8cd2214d-9e3d-44f3-bcce-bab1d76a6c4f","type":"GlyphRenderer"},{"attributes":{},"id":"729d8c50-1ab4-4e33-b12e-29596cc6cc01","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"e7c00dd1-2d08-48a3-b3aa-9b9470918ca2","type":"BoxAnnotation"}},"id":"e51b78fb-1b9b-40c4-a3ca-98ee2e53a0c7","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2dc5b6b6-311d-4dd9-9d8d-83fb859b74b2","type":"Square"},{"attributes":{"source":{"id":"b489af1c-64e8-477d-a0b7-f3d00e7cca8c","type":"ColumnDataSource"}},"id":"fa6c7c0c-22ec-4ac5-b00f-1e8285f57af7","type":"CDSView"},{"attributes":{"callback":null},"id":"6523b438-ebab-47e3-a9e1-143d113fea77","type":"DataRange1d"},{"attributes":{"source":{"id":"cadffe0b-1afc-4101-acf1-b680cf185e63","type":"ColumnDataSource"}},"id":"4cb1bac1-2664-4eeb-a284-d568f520bd22","type":"CDSView"},{"attributes":{"plot":{"id":"ae569d87-f1f3-456c-a8cf-4d2f34d7ab7b","subtype":"Figure","type":"Plot"},"ticker":{"id":"99e54ec9-5f37-48b5-8f55-2233e9d65a6d","type":"BasicTicker"}},"id":"e46b8244-1503-4245-8cb8-0658cfcca59e","type":"Grid"},{"attributes":{"items":[{"id":"6f6f94d9-5a1f-40a3-9f07-d4f7dd727abd","type":"LegendItem"},{"id":"9201884c-7b74-429a-812e-09e1c1009ef1","type":"LegendItem"},{"id":"ff1880f4-f677-4e2f-b0b6-5b1a27ebd29d","type":"LegendItem"}],"label_text_color":{"value":"navy"},"label_text_font":"times","label_text_font_style":"italic","plot":{"id":"ae569d87-f1f3-456c-a8cf-4d2f34d7ab7b","subtype":"Figure","type":"Plot"}},"id":"02d5b94f-064f-4473-8cdd-fb34e2de8788","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc8d885f-746e-4ebc-93b5-2fc3d865b3b9","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oig6uxkv6D/Sh2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/I23zJpD6gv+3ENsZjOcS/wo12/ecH0r/egWKM2KjZv2MTsJELcOC/83ixWvXH47+258MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/mEFFlgER6r+EGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyCGtcyMPLA/jqyggGI5yD/gHyIhW/jTP4BA2oTCgds/Dli7+O1M4T8cFjxSt5HkP4cZk3jGgec/lEFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9cE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+VNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8mRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx5NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"7afe1ed6-3ba7-4db4-a0e7-110d30bb4ca9","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"901970f7-7f03-4ea1-a0d3-da6d7e96f515","type":"Line"}],"root_ids":["ae569d87-f1f3-456c-a8cf-4d2f34d7ab7b"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"27e86628-e588-4658-92fe-8911fa1284bc","elementid":"049a192b-7306-47c1-bdff-1907a9264660","modelid":"ae569d87-f1f3-456c-a8cf-4d2f34d7ab7b"}];
                
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
