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
      };var element = document.getElementById("78abebbf-19a5-4ef8-aca4-19b5f0b17a62");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '78abebbf-19a5-4ef8-aca4-19b5f0b17a62' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"42178af9-2fae-452f-8b91-e9ad5408e52b":{"roots":{"references":[{"attributes":{"line_color":"green","x":{"field":"x"},"y":{"field":"y"}},"id":"e4d90ddc-e63e-412c-8e43-24290137e569","type":"Line"},{"attributes":{},"id":"6a4035df-7bec-4005-ab0f-7645f69304eb","type":"Selection"},{"attributes":{},"id":"85a705f9-b7b3-40ac-a86b-015a839ad7a8","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"8223c0e7-88ca-4004-aa79-8c47a2212046","type":"ColumnDataSource"}},"id":"595afa58-c7f5-49fc-8b38-57357fe1a6e1","type":"CDSView"},{"attributes":{},"id":"5cee93ab-70d7-4560-83a1-a28f186a977b","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"8d4e7e85-a336-4f15-9eb6-a7951b3117e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f61f5e0f-0636-4424-9b1d-4d06428b6154","type":"BasicTicker"}},"id":"e5db63b9-f07d-41a5-91d6-da42c3c35d57","type":"Grid"},{"attributes":{},"id":"d83770b4-eb58-4d8d-9769-346664f7469e","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTQP5qI2QHPEuA/+5MNU1HJ5z8ZTT7q2B3vP0aFmgwa+fI/ABg/lCAV9j+IQCEcMdb4P3fOhmLzMPs/EyzujrQb/T/9Izwlj47+PxccgYyLg/8/g6xao7j2/z9mZrL8O+b/P7+X94FZUv8/xVNiW3I9/j9RB8Ai+6v8P5FWKYlppPo/oSg6uxkv+D/Th2bxK1b1PyZGRbpaJfI/8qg+VZVT7T/4C4p0qOPlP+UppLIiM9w/3FNHxZdVyD/J23zJpD6wv+3ENsZjOdS/wo12/ecH4r/dgWKM2Kjpv2MTsJELcPC/83ixWvXH87+358MBZM72v5eCD4nhdvm/rExY6Hq2+7+TIxAn7YP9vwSssILL1/6/70I4BJ6s/7/vOc8G+P7/vzTGy1KGzf+/3176khQZ/7/C8a4NiuT9vzGcHq/dNPy/l0FFlgER+r+FGZN4xoH3vx8WPFK3kfS/Cli7+O1M8b+HQNqEwoHrv9kfIiFb+OO/gKyggGI52L8EhrXMjDzAvyGGtcyMPMA/jqyggGI52D/gHyIhW/jjP39A2oTCges/DVi7+O1M8T8bFjxSt5H0P4cZk3jGgfc/lUFFlgER+j8ynB6v3TT8P8Hxrg2K5P0/4F76khQZ/z80xstShs3/P+85zwb4/v8/8EI4BJ6s/z8DrLCCy9f+P5UjECftg/0/p0xY6Hq2+z+Vgg+J4Xb5P7fnwwFkzvY/9nixWvXH8z9dE7CRC3DwP9eBYozYqOk/w412/ecH4j/+xDbGYznUP0/bfMmkPrA/+FNHxZdVyL/UKaSyIjPcv+gLinSo4+W/+Kg+VZVT7b8lRkW6WiXyv8+HZvErVvW/pig6uxkv+L+TVimJaaT6v1EHwCL7q/y/xFNiW3I9/r/Al/eBWVL/v2Zmsvw75v+/g6xao7j2/78YHIGMi4P/v/sjPCWPjv6/EyzujrQb/b94zoZi8zD7v4xAIRwx1vi//Bc/lCAV9r9GhZoMGvnyvx9NPurYHe+/65MNU1HJ57+SiNkBzxLgv/GDAnguNNC/B1wUMyam0bw=","dtype":"float64","shape":[100]}},"selected":{"id":"d83770b4-eb58-4d8d-9769-346664f7469e","type":"Selection"},"selection_policy":{"id":"5cee93ab-70d7-4560-83a1-a28f186a977b","type":"UnionRenderers"}},"id":"b933e414-6711-4768-bdfd-0ab121947088","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[4,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"4f7d0670-aeb1-416d-8443-4af622d73048","type":"Line"},{"attributes":{"plot":{"id":"8d4e7e85-a336-4f15-9eb6-a7951b3117e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"4fec9578-5761-49cc-9e9b-10ca61653f91","type":"BasicTicker"}},"id":"1b4d8c4a-5cd2-4363-aac1-5ec00ace4fef","type":"Grid"},{"attributes":{},"id":"02149ab5-8548-4fe3-9082-9148de215b94","type":"SaveTool"},{"attributes":{"data_source":{"id":"1bad01b6-f10d-4f0b-a1e2-9e17d15030fc","type":"ColumnDataSource"},"glyph":{"id":"94b8cdfd-e171-4a02-9246-01dcabc551dc","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6bb2b2c4-97f9-40e3-8009-49c1b7421a7b","type":"Line"},"selection_glyph":null,"view":{"id":"7c470f25-9444-4c3a-b4f8-18c3f14121eb","type":"CDSView"}},"id":"34d58665-0de7-4824-af19-9881d2fe6b21","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}},"selected":{"id":"47647e47-5f6e-405a-bb1e-d5b4bcbd8c86","type":"Selection"},"selection_policy":{"id":"278d525f-4c8b-4fca-b3b1-3740fb3a57a6","type":"UnionRenderers"}},"id":"1bad01b6-f10d-4f0b-a1e2-9e17d15030fc","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"15cb8004-d4e2-4cec-bc9d-712afd310a26","type":"DataRange1d"},{"attributes":{"label":{"value":"3*sin(x)"},"renderers":[{"id":"9282b6a5-2845-4c21-b632-f03d18207a02","type":"GlyphRenderer"},{"id":"905b8fcf-2861-4bc8-85a2-01eb9d88ab16","type":"GlyphRenderer"}]},"id":"3dfa5f82-f3b0-41d1-a641-99c462d586b8","type":"LegendItem"},{"attributes":{"background_fill_alpha":{"value":0.5},"background_fill_color":{"value":"navy"},"items":[{"id":"5e94fa7f-7d3a-428b-bc51-3f686adad1da","type":"LegendItem"},{"id":"d0fa751d-b542-4bf4-9691-7c3e167c6565","type":"LegendItem"},{"id":"3dfa5f82-f3b0-41d1-a641-99c462d586b8","type":"LegendItem"}],"location":"bottom_right","plot":{"id":"8d4e7e85-a336-4f15-9eb6-a7951b3117e3","subtype":"Figure","type":"Plot"}},"id":"76a53bd4-2d59-4232-a23c-5b3aa795664b","type":"Legend"},{"attributes":{},"id":"c250174e-7880-4601-b6ca-52fd3ea20157","type":"UnionRenderers"},{"attributes":{},"id":"278d525f-4c8b-4fca-b3b1-3740fb3a57a6","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"a5563044-b85b-456e-95ef-7c137caba845","type":"BasicTickFormatter"},"plot":{"id":"8d4e7e85-a336-4f15-9eb6-a7951b3117e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"4fec9578-5761-49cc-9e9b-10ca61653f91","type":"BasicTicker"}},"id":"75e98314-2038-4f41-b04d-ffe1e39fa553","type":"LinearAxis"},{"attributes":{},"id":"b8e6108d-5984-45a0-9ffd-7e6ef3de2982","type":"Selection"},{"attributes":{},"id":"56cc03d5-bef5-4bcb-8aea-879158c164bd","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"d4b2c687-c61c-4ba4-b2ff-bf01e804f6c3","type":"DataRange1d"},{"attributes":{"data_source":{"id":"b933e414-6711-4768-bdfd-0ab121947088","type":"ColumnDataSource"},"glyph":{"id":"fecac3f7-c89c-45d0-ae88-eaa8f7a8ea6a","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4f7d0670-aeb1-416d-8443-4af622d73048","type":"Line"},"selection_glyph":null,"view":{"id":"a52c2fcd-5825-48c3-a920-c7132c2c8faa","type":"CDSView"}},"id":"4f6a0e62-09f4-49bb-8fd1-68669b5159d1","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}},"selected":{"id":"b8e6108d-5984-45a0-9ffd-7e6ef3de2982","type":"Selection"},"selection_policy":{"id":"56cc03d5-bef5-4bcb-8aea-879158c164bd","type":"UnionRenderers"}},"id":"8223c0e7-88ca-4004-aa79-8c47a2212046","type":"ColumnDataSource"},{"attributes":{"label":{"value":"sin(x)"},"renderers":[{"id":"0173bf58-342e-492a-adb0-5cc5e48c060d","type":"GlyphRenderer"},{"id":"34d58665-0de7-4824-af19-9881d2fe6b21","type":"GlyphRenderer"}]},"id":"5e94fa7f-7d3a-428b-bc51-3f686adad1da","type":"LegendItem"},{"attributes":{"below":[{"id":"75e98314-2038-4f41-b04d-ffe1e39fa553","type":"LinearAxis"}],"left":[{"id":"9d164962-e96d-4473-9997-c08df69f82eb","type":"LinearAxis"}],"renderers":[{"id":"75e98314-2038-4f41-b04d-ffe1e39fa553","type":"LinearAxis"},{"id":"1b4d8c4a-5cd2-4363-aac1-5ec00ace4fef","type":"Grid"},{"id":"9d164962-e96d-4473-9997-c08df69f82eb","type":"LinearAxis"},{"id":"e5db63b9-f07d-41a5-91d6-da42c3c35d57","type":"Grid"},{"id":"83352266-b37d-4056-82b8-8a142e38038a","type":"BoxAnnotation"},{"id":"76a53bd4-2d59-4232-a23c-5b3aa795664b","type":"Legend"},{"id":"0173bf58-342e-492a-adb0-5cc5e48c060d","type":"GlyphRenderer"},{"id":"34d58665-0de7-4824-af19-9881d2fe6b21","type":"GlyphRenderer"},{"id":"4f6a0e62-09f4-49bb-8fd1-68669b5159d1","type":"GlyphRenderer"},{"id":"9282b6a5-2845-4c21-b632-f03d18207a02","type":"GlyphRenderer"},{"id":"905b8fcf-2861-4bc8-85a2-01eb9d88ab16","type":"GlyphRenderer"}],"title":{"id":"ea9fd281-4f87-46c5-8277-5d3f3bc7aad7","type":"Title"},"toolbar":{"id":"b0f2968b-6c3f-4d23-8bf1-a46874ebe78c","type":"Toolbar"},"x_range":{"id":"d4b2c687-c61c-4ba4-b2ff-bf01e804f6c3","type":"DataRange1d"},"x_scale":{"id":"d0a2ef0d-a249-496b-a8be-35eb383c3edd","type":"LinearScale"},"y_range":{"id":"15cb8004-d4e2-4cec-bc9d-712afd310a26","type":"DataRange1d"},"y_scale":{"id":"da1d74fe-fffa-4dd6-b40e-0d05b280310b","type":"LinearScale"}},"id":"8d4e7e85-a336-4f15-9eb6-a7951b3117e3","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"90f7828d-c59f-44dd-ba39-2c448b72194c","type":"ColumnDataSource"},"glyph":{"id":"18adc91c-375d-4c33-bf83-08fc1401eb18","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38c8f422-bce8-470b-9096-1b611b6320ba","type":"Square"},"selection_glyph":null,"view":{"id":"8b8018e9-25eb-4818-adb9-291ca5c8ad66","type":"CDSView"}},"id":"9282b6a5-2845-4c21-b632-f03d18207a02","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"6bb2b2c4-97f9-40e3-8009-49c1b7421a7b","type":"Line"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAeZ5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+uSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/J7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMfGzMMGMA8AkU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzJJEDPTWsg/aoF44Akr4j/QL7OxiPTtP1+wo+NRofQ/FAQZ9WTz+T8oIVr7ktr+PyVTbtpUoQFAMPGzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8MHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+n710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b846WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9e5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}},"selected":{"id":"6a4035df-7bec-4005-ab0f-7645f69304eb","type":"Selection"},"selection_policy":{"id":"359fc5b3-7452-4933-b438-29f4447ece53","type":"UnionRenderers"}},"id":"90f7828d-c59f-44dd-ba39-2c448b72194c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"12caf1fc-0c9e-4ee1-923f-62d12c7acfd7","type":"ColumnDataSource"},"glyph":{"id":"e4d90ddc-e63e-412c-8e43-24290137e569","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12200039-e543-4a6b-a734-a374b1597271","type":"Line"},"selection_glyph":null,"view":{"id":"6c3fd8b3-64d7-4ea8-8eed-938369fdca01","type":"CDSView"}},"id":"905b8fcf-2861-4bc8-85a2-01eb9d88ab16","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"83352266-b37d-4056-82b8-8a142e38038a","type":"BoxAnnotation"}},"id":"84429f23-e310-45c5-b9f2-82e05e808eb2","type":"BoxZoomTool"},{"attributes":{"source":{"id":"90f7828d-c59f-44dd-ba39-2c448b72194c","type":"ColumnDataSource"}},"id":"8b8018e9-25eb-4818-adb9-291ca5c8ad66","type":"CDSView"},{"attributes":{},"id":"3f4f3daf-158d-4be7-b341-0c822ca049e5","type":"HelpTool"},{"attributes":{"formatter":{"id":"85a705f9-b7b3-40ac-a86b-015a839ad7a8","type":"BasicTickFormatter"},"plot":{"id":"8d4e7e85-a336-4f15-9eb6-a7951b3117e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f61f5e0f-0636-4424-9b1d-4d06428b6154","type":"BasicTicker"}},"id":"9d164962-e96d-4473-9997-c08df69f82eb","type":"LinearAxis"},{"attributes":{},"id":"63010efb-8cf8-462d-b9de-ef87a63aa75d","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"38c8f422-bce8-470b-9096-1b611b6320ba","type":"Square"},{"attributes":{},"id":"47647e47-5f6e-405a-bb1e-d5b4bcbd8c86","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3cadfa59-8c34-4a52-a2ca-ae975aafc1d6","type":"Circle"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18adc91c-375d-4c33-bf83-08fc1401eb18","type":"Square"},{"attributes":{"source":{"id":"1bad01b6-f10d-4f0b-a1e2-9e17d15030fc","type":"ColumnDataSource"}},"id":"7c470f25-9444-4c3a-b4f8-18c3f14121eb","type":"CDSView"},{"attributes":{"source":{"id":"b933e414-6711-4768-bdfd-0ab121947088","type":"ColumnDataSource"}},"id":"a52c2fcd-5825-48c3-a920-c7132c2c8faa","type":"CDSView"},{"attributes":{},"id":"d0a2ef0d-a249-496b-a8be-35eb383c3edd","type":"LinearScale"},{"attributes":{"line_color":"orange","line_dash":[4,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"fecac3f7-c89c-45d0-ae88-eaa8f7a8ea6a","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"12200039-e543-4a6b-a734-a374b1597271","type":"Line"},{"attributes":{},"id":"f61f5e0f-0636-4424-9b1d-4d06428b6154","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2238400a-0cb7-46dc-9995-e09922e0bf5c","type":"Circle"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAeZ5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+uSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/J7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMfGzMMGMA8AkU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzJJEDPTWsg/aoF44Akr4j/QL7OxiPTtP1+wo+NRofQ/FAQZ9WTz+T8oIVr7ktr+PyVTbtpUoQFAMPGzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8MHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+n710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b846WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9e5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}},"selected":{"id":"bf9416c9-73a2-4505-aae6-a511f15ae957","type":"Selection"},"selection_policy":{"id":"c250174e-7880-4601-b6ca-52fd3ea20157","type":"UnionRenderers"}},"id":"12caf1fc-0c9e-4ee1-923f-62d12c7acfd7","type":"ColumnDataSource"},{"attributes":{},"id":"4fec9578-5761-49cc-9e9b-10ca61653f91","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"ea9fd281-4f87-46c5-8277-5d3f3bc7aad7","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"83352266-b37d-4056-82b8-8a142e38038a","type":"BoxAnnotation"},{"attributes":{"source":{"id":"12caf1fc-0c9e-4ee1-923f-62d12c7acfd7","type":"ColumnDataSource"}},"id":"6c3fd8b3-64d7-4ea8-8eed-938369fdca01","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"58293a7d-5795-41df-a7f5-f917be755abd","type":"PanTool"},{"id":"63010efb-8cf8-462d-b9de-ef87a63aa75d","type":"WheelZoomTool"},{"id":"84429f23-e310-45c5-b9f2-82e05e808eb2","type":"BoxZoomTool"},{"id":"02149ab5-8548-4fe3-9082-9148de215b94","type":"SaveTool"},{"id":"9e17c500-3e40-46b7-92b2-20fa9c61838b","type":"ResetTool"},{"id":"3f4f3daf-158d-4be7-b341-0c822ca049e5","type":"HelpTool"}]},"id":"b0f2968b-6c3f-4d23-8bf1-a46874ebe78c","type":"Toolbar"},{"attributes":{},"id":"bf9416c9-73a2-4505-aae6-a511f15ae957","type":"Selection"},{"attributes":{},"id":"58293a7d-5795-41df-a7f5-f917be755abd","type":"PanTool"},{"attributes":{},"id":"359fc5b3-7452-4933-b438-29f4447ece53","type":"UnionRenderers"},{"attributes":{},"id":"a5563044-b85b-456e-95ef-7c137caba845","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8223c0e7-88ca-4004-aa79-8c47a2212046","type":"ColumnDataSource"},"glyph":{"id":"2238400a-0cb7-46dc-9995-e09922e0bf5c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3cadfa59-8c34-4a52-a2ca-ae975aafc1d6","type":"Circle"},"selection_glyph":null,"view":{"id":"595afa58-c7f5-49fc-8b38-57357fe1a6e1","type":"CDSView"}},"id":"0173bf58-342e-492a-adb0-5cc5e48c060d","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"94b8cdfd-e171-4a02-9246-01dcabc551dc","type":"Line"},{"attributes":{"label":{"value":"2*sin(x)"},"renderers":[{"id":"4f6a0e62-09f4-49bb-8fd1-68669b5159d1","type":"GlyphRenderer"}]},"id":"d0fa751d-b542-4bf4-9691-7c3e167c6565","type":"LegendItem"},{"attributes":{},"id":"9e17c500-3e40-46b7-92b2-20fa9c61838b","type":"ResetTool"},{"attributes":{},"id":"da1d74fe-fffa-4dd6-b40e-0d05b280310b","type":"LinearScale"}],"root_ids":["8d4e7e85-a336-4f15-9eb6-a7951b3117e3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"42178af9-2fae-452f-8b91-e9ad5408e52b","roots":{"8d4e7e85-a336-4f15-9eb6-a7951b3117e3":"78abebbf-19a5-4ef8-aca4-19b5f0b17a62"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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