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
      };var element = document.getElementById("422a3f41-ad05-4650-beb4-d554fb2e45a3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '422a3f41-ad05-4650-beb4-d554fb2e45a3' but no matching script tag was found. ")
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
                    var docs_json = {"358aee99-eb98-496d-8a24-377156a9610e":{"roots":{"references":[{"attributes":{"label":{"value":"sin(x)"},"renderers":[{"id":"3db7590d-9fec-4f2e-b8a8-9f6425dce450","type":"GlyphRenderer"},{"id":"0e3e6a79-9042-42e5-a739-81e0ea0594c0","type":"GlyphRenderer"}]},"id":"d5f01784-0048-4809-9fbf-1fedadb8f383","type":"LegendItem"},{"attributes":{},"id":"26d6aa9a-90a7-4f55-8f6f-57a3b0abb637","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oig6uxkv6D/Sh2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/I23zJpD6gv+3ENsZjOcS/wo12/ecH0r/egWKM2KjZv2MTsJELcOC/83ixWvXH47+258MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/mEFFlgER6r+EGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyCGtcyMPLA/jqyggGI5yD/gHyIhW/jTP4BA2oTCgds/Dli7+O1M4T8cFjxSt5HkP4cZk3jGgec/lEFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9cE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+VNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8mRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx5NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"b3985cd7-2813-4fb3-b49c-a337f4102fcd","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAep5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+sSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/I7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMvGzMMGMA8AjU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzBJEDPTWsg/aoF44Akr4j/QL7OxiPTtP2Cwo+NRofQ/FQQZ9WTz+T8qIVr7ktr+PyVTbtpUoQFAL/GzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8KHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+3710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b856WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9a5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"4e0c2bfc-d869-4c79-a910-69702b1f1234","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"d6387148-2bf0-4113-8701-d93416d777e1","type":"DataRange1d"},{"attributes":{},"id":"88b5f891-2c2a-4610-92a1-fe2dbe45f046","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oig6uxkv6D/Sh2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/I23zJpD6gv+3ENsZjOcS/wo12/ecH0r/egWKM2KjZv2MTsJELcOC/83ixWvXH47+258MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/mEFFlgER6r+EGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyCGtcyMPLA/jqyggGI5yD/gHyIhW/jTP4BA2oTCgds/Dli7+O1M4T8cFjxSt5HkP4cZk3jGgec/lEFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9cE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+VNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8mRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx5NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"7655c141-b381-4d5e-bf9a-7b45f0fff9e0","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2eb50497-4f51-44fe-a4fb-348fadf7683e","type":"Line"},{"attributes":{"source":{"id":"c50cc4ef-e345-43db-849f-6da4d7ef59b1","type":"ColumnDataSource"}},"id":"2d85c98e-47f8-4059-824c-dd5c045c9b84","type":"CDSView"},{"attributes":{"below":[{"id":"70449843-b113-4bb6-91e6-2bd90544ea08","type":"LinearAxis"}],"left":[{"id":"c33fbbab-8f89-4c16-be83-1ceccc599ea2","type":"LinearAxis"}],"renderers":[{"id":"70449843-b113-4bb6-91e6-2bd90544ea08","type":"LinearAxis"},{"id":"673f4643-4ea4-4ac9-a5ec-4570003dea97","type":"Grid"},{"id":"c33fbbab-8f89-4c16-be83-1ceccc599ea2","type":"LinearAxis"},{"id":"8c1d8c29-4b60-4a4f-a704-5690d3bb5225","type":"Grid"},{"id":"6782ae55-6a98-43c5-8303-c4201b3e9102","type":"BoxAnnotation"},{"id":"b6d5f7e5-78e6-4e60-abe8-585237b36ce1","type":"Legend"},{"id":"3db7590d-9fec-4f2e-b8a8-9f6425dce450","type":"GlyphRenderer"},{"id":"0e3e6a79-9042-42e5-a739-81e0ea0594c0","type":"GlyphRenderer"},{"id":"1f59096e-1f21-4f97-a79f-9bbc42f9d1a8","type":"GlyphRenderer"},{"id":"5c922c3b-2695-4001-a29b-8855e646f07d","type":"GlyphRenderer"},{"id":"bbb68153-1eee-44b9-b92b-c81f16cab2dc","type":"GlyphRenderer"}],"title":{"id":"b91fb5d8-2ddd-413b-989e-6d7313b272e5","type":"Title"},"toolbar":{"id":"cc695c64-a68f-492a-aa85-03727156da04","type":"Toolbar"},"x_range":{"id":"d3cdd2a7-f1cd-432a-bcfa-91a7a2eadad5","type":"DataRange1d"},"x_scale":{"id":"e8ca5eab-f05a-41ba-b2a3-22784f3b29bd","type":"LinearScale"},"y_range":{"id":"d6387148-2bf0-4113-8701-d93416d777e1","type":"DataRange1d"},"y_scale":{"id":"24f2c70c-a429-4b94-a043-69b80e736a4f","type":"LinearScale"}},"id":"70c0ee89-19a4-4df1-93de-e0ecef26213d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"08fbc1b1-cdde-4a6f-8bda-0308c22922bb","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0dfb0838-6baf-4ea0-8148-bd1c4f192e56","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a941b437-b9bc-415c-a8fb-12b3987ab648","type":"PanTool"},{"id":"26d6aa9a-90a7-4f55-8f6f-57a3b0abb637","type":"WheelZoomTool"},{"id":"b0995ca3-117b-498d-95de-d1156e86a21a","type":"BoxZoomTool"},{"id":"39c19986-8dee-42f9-abe9-72f92482bb6a","type":"SaveTool"},{"id":"c16ea352-ee20-4718-90ea-7c2845ce1fc8","type":"ResetTool"},{"id":"58ccb113-8cec-419f-a239-1a0e6a78f1fa","type":"HelpTool"}]},"id":"cc695c64-a68f-492a-aa85-03727156da04","type":"Toolbar"},{"attributes":{"data_source":{"id":"7655c141-b381-4d5e-bf9a-7b45f0fff9e0","type":"ColumnDataSource"},"glyph":{"id":"26371720-3dcb-44a5-bb14-42ea97d3aae2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a5613d52-012a-4028-bdd3-4fb7e3ca88dc","type":"Circle"},"selection_glyph":null,"view":{"id":"4450aa4d-1a32-49ce-b541-64b48344f28d","type":"CDSView"}},"id":"3db7590d-9fec-4f2e-b8a8-9f6425dce450","type":"GlyphRenderer"},{"attributes":{},"id":"24f2c70c-a429-4b94-a043-69b80e736a4f","type":"LinearScale"},{"attributes":{"formatter":{"id":"08fbc1b1-cdde-4a6f-8bda-0308c22922bb","type":"BasicTickFormatter"},"plot":{"id":"70c0ee89-19a4-4df1-93de-e0ecef26213d","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe26ab3e-daeb-4607-811f-84f5a76241b7","type":"BasicTicker"}},"id":"c33fbbab-8f89-4c16-be83-1ceccc599ea2","type":"LinearAxis"},{"attributes":{"source":{"id":"ff079b76-4a5c-4071-ae5e-0a0df7e1a70a","type":"ColumnDataSource"}},"id":"70451466-a325-4c0b-b12b-a6b1bc15ca65","type":"CDSView"},{"attributes":{"data_source":{"id":"b3985cd7-2813-4fb3-b49c-a337f4102fcd","type":"ColumnDataSource"},"glyph":{"id":"a5a904f7-aa32-4ac3-b1b5-eab939062c1f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1413d8aa-4cb7-4b50-8570-de085023fc25","type":"Line"},"selection_glyph":null,"view":{"id":"fc762292-4f2b-4963-9278-778dde53b12b","type":"CDSView"}},"id":"0e3e6a79-9042-42e5-a739-81e0ea0594c0","type":"GlyphRenderer"},{"attributes":{},"id":"39c19986-8dee-42f9-abe9-72f92482bb6a","type":"SaveTool"},{"attributes":{"plot":{"id":"70c0ee89-19a4-4df1-93de-e0ecef26213d","subtype":"Figure","type":"Plot"},"ticker":{"id":"33e6a9aa-43b0-4b6b-b9b0-8f719a0e391b","type":"BasicTicker"}},"id":"673f4643-4ea4-4ac9-a5ec-4570003dea97","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTQP5qI2QHPEuA/+5MNU1HJ5z8ZTT7q2B3vP0aFmgwa+fI/ABg/lCAV9j+IQCEcMdb4P3fOhmLzMPs/EyzujrQb/T/9Izwlj47+PxccgYyLg/8/g6xao7j2/z9mZrL8O+b/P7+X94FZUv8/xVNiW3I9/j9RB8Ai+6v8P5FWKYlppPo/oig6uxkv+D/Sh2bxK1b1PyZGRbpaJfI/8qg+VZVT7T/4C4p0qOPlP+UppLIiM9w/3FNHxZdVyD/I23zJpD6wv+3ENsZjOdS/wo12/ecH4r/egWKM2Kjpv2MTsJELcPC/83ixWvXH87+258MBZM72v5eCD4nhdvm/rExY6Hq2+7+TIxAn7YP9vwSssILL1/6/70I4BJ6s/7/vOc8G+P7/vzTGy1KGzf+/3176khQZ/7/C8a4NiuT9vzGcHq/dNPy/mEFFlgER+r+EGZN4xoH3vx8WPFK3kfS/Cli7+O1M8b+HQNqEwoHrv9kfIiFb+OO/gKyggGI52L8EhrXMjDzAvyCGtcyMPMA/jqyggGI52D/gHyIhW/jjP4BA2oTCges/Dli7+O1M8T8cFjxSt5H0P4cZk3jGgfc/lEFFlgER+j8ynB6v3TT8P8Hxrg2K5P0/4F76khQZ/z80xstShs3/P+85zwb4/v8/8EI4BJ6s/z8DrLCCy9f+P5UjECftg/0/p0xY6Hq2+z+Vgg+J4Xb5P7fnwwFkzvY/9nixWvXH8z9cE7CRC3DwP9eBYozYqOk/w412/ecH4j/+xDbGYznUP0/bfMmkPrA/+VNHxZdVyL/UKaSyIjPcv+gLinSo4+W/+Kg+VZVT7b8mRkW6WiXyv8+HZvErVvW/pig6uxkv+L+TVimJaaT6v1EHwCL7q/y/xFNiW3I9/r/Al/eBWVL/v2Zmsvw75v+/g6xao7j2/78YHIGMi4P/v/sjPCWPjv6/EyzujrQb/b94zoZi8zD7v4xAIRwx1vi//Bc/lCAV9r9GhZoMGvnyvx5NPurYHe+/65MNU1HJ57+SiNkBzxLgv/GDAnguNNC/B1wUMyam0bw=","dtype":"float64","shape":[100]}}},"id":"ff079b76-4a5c-4071-ae5e-0a0df7e1a70a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ff079b76-4a5c-4071-ae5e-0a0df7e1a70a","type":"ColumnDataSource"},"glyph":{"id":"abce9813-7497-470c-9310-80f327258669","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5efe7d00-1d40-47ce-88ef-f0c198d2bf45","type":"Line"},"selection_glyph":null,"view":{"id":"70451466-a325-4c0b-b12b-a6b1bc15ca65","type":"CDSView"}},"id":"1f59096e-1f21-4f97-a79f-9bbc42f9d1a8","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4e0c2bfc-d869-4c79-a910-69702b1f1234","type":"ColumnDataSource"}},"id":"3290982e-5b79-4769-b981-28cb7e966bd1","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"70c0ee89-19a4-4df1-93de-e0ecef26213d","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe26ab3e-daeb-4607-811f-84f5a76241b7","type":"BasicTicker"}},"id":"8c1d8c29-4b60-4a4f-a704-5690d3bb5225","type":"Grid"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"abce9813-7497-470c-9310-80f327258669","type":"Line"},{"attributes":{},"id":"c16ea352-ee20-4718-90ea-7c2845ce1fc8","type":"ResetTool"},{"attributes":{},"id":"a941b437-b9bc-415c-a8fb-12b3987ab648","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a5613d52-012a-4028-bdd3-4fb7e3ca88dc","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa40ee5b-fb36-4ab9-a430-9dcfc3c8caa0","type":"Square"},{"attributes":{},"id":"fe26ab3e-daeb-4607-811f-84f5a76241b7","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d3cdd2a7-f1cd-432a-bcfa-91a7a2eadad5","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a5a904f7-aa32-4ac3-b1b5-eab939062c1f","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1413d8aa-4cb7-4b50-8570-de085023fc25","type":"Line"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5cad8da3-57f4-4b2d-bd31-ca6367b850a7","type":"Square"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAep5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+sSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/I7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMvGzMMGMA8AjU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzBJEDPTWsg/aoF44Akr4j/QL7OxiPTtP2Cwo+NRofQ/FQQZ9WTz+T8qIVr7ktr+PyVTbtpUoQFAL/GzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8KHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+3710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b856WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9a5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"c50cc4ef-e345-43db-849f-6da4d7ef59b1","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7655c141-b381-4d5e-bf9a-7b45f0fff9e0","type":"ColumnDataSource"}},"id":"4450aa4d-1a32-49ce-b541-64b48344f28d","type":"CDSView"},{"attributes":{"source":{"id":"b3985cd7-2813-4fb3-b49c-a337f4102fcd","type":"ColumnDataSource"}},"id":"fc762292-4f2b-4963-9278-778dde53b12b","type":"CDSView"},{"attributes":{"data_source":{"id":"4e0c2bfc-d869-4c79-a910-69702b1f1234","type":"ColumnDataSource"},"glyph":{"id":"0dfb0838-6baf-4ea0-8148-bd1c4f192e56","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2eb50497-4f51-44fe-a4fb-348fadf7683e","type":"Line"},"selection_glyph":null,"view":{"id":"3290982e-5b79-4769-b981-28cb7e966bd1","type":"CDSView"}},"id":"bbb68153-1eee-44b9-b92b-c81f16cab2dc","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26371720-3dcb-44a5-bb14-42ea97d3aae2","type":"Circle"},{"attributes":{"overlay":{"id":"6782ae55-6a98-43c5-8303-c4201b3e9102","type":"BoxAnnotation"}},"id":"b0995ca3-117b-498d-95de-d1156e86a21a","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6782ae55-6a98-43c5-8303-c4201b3e9102","type":"BoxAnnotation"},{"attributes":{"label":{"value":"2*sin(x)"},"renderers":[{"id":"1f59096e-1f21-4f97-a79f-9bbc42f9d1a8","type":"GlyphRenderer"}]},"id":"75d8c956-b008-46a4-8312-e2827af40878","type":"LegendItem"},{"attributes":{},"id":"58ccb113-8cec-419f-a239-1a0e6a78f1fa","type":"HelpTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5efe7d00-1d40-47ce-88ef-f0c198d2bf45","type":"Line"},{"attributes":{"formatter":{"id":"88b5f891-2c2a-4610-92a1-fe2dbe45f046","type":"BasicTickFormatter"},"plot":{"id":"70c0ee89-19a4-4df1-93de-e0ecef26213d","subtype":"Figure","type":"Plot"},"ticker":{"id":"33e6a9aa-43b0-4b6b-b9b0-8f719a0e391b","type":"BasicTicker"}},"id":"70449843-b113-4bb6-91e6-2bd90544ea08","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"b91fb5d8-2ddd-413b-989e-6d7313b272e5","type":"Title"},{"attributes":{"label":{"value":"3*sin(x)"},"renderers":[{"id":"5c922c3b-2695-4001-a29b-8855e646f07d","type":"GlyphRenderer"},{"id":"bbb68153-1eee-44b9-b92b-c81f16cab2dc","type":"GlyphRenderer"}]},"id":"74325551-c678-49b9-96cb-0a4d10472880","type":"LegendItem"},{"attributes":{"glyph_width":50,"items":[{"id":"d5f01784-0048-4809-9fbf-1fedadb8f383","type":"LegendItem"},{"id":"75d8c956-b008-46a4-8312-e2827af40878","type":"LegendItem"},{"id":"74325551-c678-49b9-96cb-0a4d10472880","type":"LegendItem"}],"margin":50,"padding":50,"plot":{"id":"70c0ee89-19a4-4df1-93de-e0ecef26213d","subtype":"Figure","type":"Plot"},"spacing":10},"id":"b6d5f7e5-78e6-4e60-abe8-585237b36ce1","type":"Legend"},{"attributes":{"data_source":{"id":"c50cc4ef-e345-43db-849f-6da4d7ef59b1","type":"ColumnDataSource"},"glyph":{"id":"5cad8da3-57f4-4b2d-bd31-ca6367b850a7","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aa40ee5b-fb36-4ab9-a430-9dcfc3c8caa0","type":"Square"},"selection_glyph":null,"view":{"id":"2d85c98e-47f8-4059-824c-dd5c045c9b84","type":"CDSView"}},"id":"5c922c3b-2695-4001-a29b-8855e646f07d","type":"GlyphRenderer"},{"attributes":{},"id":"e8ca5eab-f05a-41ba-b2a3-22784f3b29bd","type":"LinearScale"},{"attributes":{},"id":"33e6a9aa-43b0-4b6b-b9b0-8f719a0e391b","type":"BasicTicker"}],"root_ids":["70c0ee89-19a4-4df1-93de-e0ecef26213d"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"358aee99-eb98-496d-8a24-377156a9610e","elementid":"422a3f41-ad05-4650-beb4-d554fb2e45a3","modelid":"70c0ee89-19a4-4df1-93de-e0ecef26213d"}];
                
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
