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
      };var element = document.getElementById("2b3e9303-cdbf-4a49-99cf-2361bbfd4629");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2b3e9303-cdbf-4a49-99cf-2361bbfd4629' but no matching script tag was found. ")
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
                    var docs_json = {"b8cde94e-4848-4143-b9cf-342ddfce7918":{"roots":{"references":[{"attributes":{"items":[{"id":"9dc5a23d-45ad-4f54-8ec0-4aa617d1c215","type":"LegendItem"},{"id":"68c20542-8e52-4466-b3ba-c05655f6882a","type":"LegendItem"},{"id":"dd930d49-26fb-4e4a-b274-63eadd2f00ba","type":"LegendItem"}],"orientation":"horizontal","plot":{"id":"370e952f-71a5-4e2f-8fb6-f195e040a308","subtype":"Figure","type":"Plot"}},"id":"dc6f85f6-5c7d-496c-a29b-813adaaf096d","type":"Legend"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oig6uxkv6D/Sh2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/I23zJpD6gv+3ENsZjOcS/wo12/ecH0r/egWKM2KjZv2MTsJELcOC/83ixWvXH47+258MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/mEFFlgER6r+EGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyCGtcyMPLA/jqyggGI5yD/gHyIhW/jTP4BA2oTCgds/Dli7+O1M4T8cFjxSt5HkP4cZk3jGgec/lEFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9cE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+VNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8mRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx5NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"3046a97b-5f61-45fe-919d-ce528a9e9c4c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3f1d15b5-4982-47e6-8727-dc5e1385a1bf","type":"ColumnDataSource"},"glyph":{"id":"006bfab9-1c0f-4e6b-bcc0-76f05d051ef1","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aafe98a7-8ce3-412e-b0ed-e52ba37273fd","type":"Line"},"selection_glyph":null,"view":{"id":"fd670427-2e9e-42d9-a0a3-a04967270113","type":"CDSView"}},"id":"4c3e53c9-c3ce-44ce-80b3-a56b60ba370d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"370e952f-71a5-4e2f-8fb6-f195e040a308","subtype":"Figure","type":"Plot"},"ticker":{"id":"75fa2665-1072-4156-8d32-db449a438526","type":"BasicTicker"}},"id":"73311a97-c669-4ed6-a6f5-eee996218d20","type":"Grid"},{"attributes":{"source":{"id":"3f1d15b5-4982-47e6-8727-dc5e1385a1bf","type":"ColumnDataSource"}},"id":"fd670427-2e9e-42d9-a0a3-a04967270113","type":"CDSView"},{"attributes":{},"id":"644ebbba-2db2-405b-96e1-2439446b1da1","type":"HelpTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b31eb76-daa5-435b-9745-2bbc83dd4ba8","type":"Square"},{"attributes":{"data_source":{"id":"19c886ce-32ba-4714-970c-bb3f06a079fd","type":"ColumnDataSource"},"glyph":{"id":"1b31eb76-daa5-435b-9745-2bbc83dd4ba8","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72f443af-6eb9-4001-9a56-b0692f823916","type":"Square"},"selection_glyph":null,"view":{"id":"ce529fb5-237b-4c66-9360-8e6b0f51a97a","type":"CDSView"}},"id":"b0246372-09e4-4099-9b47-487168fbc0fc","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"72f443af-6eb9-4001-9a56-b0692f823916","type":"Square"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oig6uxkv6D/Sh2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/I23zJpD6gv+3ENsZjOcS/wo12/ecH0r/egWKM2KjZv2MTsJELcOC/83ixWvXH47+258MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/mEFFlgER6r+EGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyCGtcyMPLA/jqyggGI5yD/gHyIhW/jTP4BA2oTCgds/Dli7+O1M4T8cFjxSt5HkP4cZk3jGgec/lEFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9cE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+VNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8mRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx5NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"d76c2888-939c-42d8-87bc-51425f07c253","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d58f17b9-fb48-4aa9-ad84-7ff21cb1c5ce","type":"ColumnDataSource"},"glyph":{"id":"2ae1f6f3-96fc-4e55-8712-86b669ac8643","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e7cfe55b-e321-4c5c-9b32-f30a3fc3472a","type":"Line"},"selection_glyph":null,"view":{"id":"903e323a-449f-4bf0-8812-c2e878eb7dcb","type":"CDSView"}},"id":"ca111c40-be93-4f9c-a77d-7cea123f53e1","type":"GlyphRenderer"},{"attributes":{"source":{"id":"19c886ce-32ba-4714-970c-bb3f06a079fd","type":"ColumnDataSource"}},"id":"ce529fb5-237b-4c66-9360-8e6b0f51a97a","type":"CDSView"},{"attributes":{},"id":"c4a24b6c-01e2-4040-8f8b-6200f84b642f","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"3*sin(x)"},"renderers":[{"id":"b0246372-09e4-4099-9b47-487168fbc0fc","type":"GlyphRenderer"},{"id":"4c3e53c9-c3ce-44ce-80b3-a56b60ba370d","type":"GlyphRenderer"}]},"id":"dd930d49-26fb-4e4a-b274-63eadd2f00ba","type":"LegendItem"},{"attributes":{},"id":"4661b595-f498-4589-a75d-a21fa82dd113","type":"LinearScale"},{"attributes":{"callback":null},"id":"631d2e2b-0a36-4515-aa2d-84902ed7fd8f","type":"DataRange1d"},{"attributes":{},"id":"f12a2953-7b94-48cc-8e87-333e5fa57dfe","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"423507b7-ff4b-4657-bce4-35c62f42fb27","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAep5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+sSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/I7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMvGzMMGMA8AjU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzBJEDPTWsg/aoF44Akr4j/QL7OxiPTtP2Cwo+NRofQ/FQQZ9WTz+T8qIVr7ktr+PyVTbtpUoQFAL/GzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8KHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+3710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b856WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9a5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"3f1d15b5-4982-47e6-8727-dc5e1385a1bf","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ae1f6f3-96fc-4e55-8712-86b669ac8643","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"370e952f-71a5-4e2f-8fb6-f195e040a308","subtype":"Figure","type":"Plot"},"ticker":{"id":"c41c1efc-b181-4d4d-a929-2b4091fea579","type":"BasicTicker"}},"id":"ab3d6161-9961-4238-b36e-3ea0f56a2c1a","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAep5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+sSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/I7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMvGzMMGMA8AjU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzBJEDPTWsg/aoF44Akr4j/QL7OxiPTtP2Cwo+NRofQ/FQQZ9WTz+T8qIVr7ktr+PyVTbtpUoQFAL/GzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8KHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+3710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b856WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9a5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"19c886ce-32ba-4714-970c-bb3f06a079fd","type":"ColumnDataSource"},{"attributes":{},"id":"e5bb0aba-9716-4f4b-bd9b-ce35b64dda5b","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"f746c9d0-ff4c-4328-8500-b472508b9ad8","type":"BoxAnnotation"}},"id":"c064755e-2d8a-49ba-a782-8d51b5c5a0fe","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"c4a24b6c-01e2-4040-8f8b-6200f84b642f","type":"BasicTickFormatter"},"plot":{"id":"370e952f-71a5-4e2f-8fb6-f195e040a308","subtype":"Figure","type":"Plot"},"ticker":{"id":"75fa2665-1072-4156-8d32-db449a438526","type":"BasicTicker"}},"id":"6140180c-6ccf-49f9-9ac7-ee447a4857f5","type":"LinearAxis"},{"attributes":{"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"006bfab9-1c0f-4e6b-bcc0-76f05d051ef1","type":"Line"},{"attributes":{},"id":"75fa2665-1072-4156-8d32-db449a438526","type":"BasicTicker"},{"attributes":{"label":{"value":"2*sin(x)"},"renderers":[{"id":"ca111c40-be93-4f9c-a77d-7cea123f53e1","type":"GlyphRenderer"}]},"id":"68c20542-8e52-4466-b3ba-c05655f6882a","type":"LegendItem"},{"attributes":{"source":{"id":"d76c2888-939c-42d8-87bc-51425f07c253","type":"ColumnDataSource"}},"id":"2ef0a7d3-ad4b-40b9-b515-7dab2f32891d","type":"CDSView"},{"attributes":{},"id":"b4c84394-bb90-4552-9e46-1d868c2a8a94","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e4b04ba-54c1-4cea-9f98-550697ede4c1","type":"Circle"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3f933ce-aee5-4ce4-a823-c60caa421618","type":"Line"},{"attributes":{"callback":null},"id":"0ac1d017-e084-4324-881b-0834a0c57695","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e7cfe55b-e321-4c5c-9b32-f30a3fc3472a","type":"Line"},{"attributes":{"data_source":{"id":"d76c2888-939c-42d8-87bc-51425f07c253","type":"ColumnDataSource"},"glyph":{"id":"a3f933ce-aee5-4ce4-a823-c60caa421618","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43f509c8-9e22-4af1-850c-d77960ddf50b","type":"Line"},"selection_glyph":null,"view":{"id":"2ef0a7d3-ad4b-40b9-b515-7dab2f32891d","type":"CDSView"}},"id":"7c484b7a-55b0-4a5a-bbbd-4309800df77e","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"b0cb9c67-2966-42e4-8cad-83ee5147f60b","type":"BasicTickFormatter"},"plot":{"id":"370e952f-71a5-4e2f-8fb6-f195e040a308","subtype":"Figure","type":"Plot"},"ticker":{"id":"c41c1efc-b181-4d4d-a929-2b4091fea579","type":"BasicTicker"}},"id":"1732935f-e03f-4720-a58b-ada1655880d8","type":"LinearAxis"},{"attributes":{"source":{"id":"d58f17b9-fb48-4aa9-ad84-7ff21cb1c5ce","type":"ColumnDataSource"}},"id":"903e323a-449f-4bf0-8812-c2e878eb7dcb","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"43f509c8-9e22-4af1-850c-d77960ddf50b","type":"Line"},{"attributes":{},"id":"67a2e88c-516d-448a-8430-b3e99ae0fd32","type":"LinearScale"},{"attributes":{},"id":"c41c1efc-b181-4d4d-a929-2b4091fea579","type":"BasicTicker"},{"attributes":{},"id":"b0cb9c67-2966-42e4-8cad-83ee5147f60b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTQP5qI2QHPEuA/+5MNU1HJ5z8ZTT7q2B3vP0aFmgwa+fI/ABg/lCAV9j+IQCEcMdb4P3fOhmLzMPs/EyzujrQb/T/9Izwlj47+PxccgYyLg/8/g6xao7j2/z9mZrL8O+b/P7+X94FZUv8/xVNiW3I9/j9RB8Ai+6v8P5FWKYlppPo/oig6uxkv+D/Sh2bxK1b1PyZGRbpaJfI/8qg+VZVT7T/4C4p0qOPlP+UppLIiM9w/3FNHxZdVyD/I23zJpD6wv+3ENsZjOdS/wo12/ecH4r/egWKM2Kjpv2MTsJELcPC/83ixWvXH87+258MBZM72v5eCD4nhdvm/rExY6Hq2+7+TIxAn7YP9vwSssILL1/6/70I4BJ6s/7/vOc8G+P7/vzTGy1KGzf+/3176khQZ/7/C8a4NiuT9vzGcHq/dNPy/mEFFlgER+r+EGZN4xoH3vx8WPFK3kfS/Cli7+O1M8b+HQNqEwoHrv9kfIiFb+OO/gKyggGI52L8EhrXMjDzAvyCGtcyMPMA/jqyggGI52D/gHyIhW/jjP4BA2oTCges/Dli7+O1M8T8cFjxSt5H0P4cZk3jGgfc/lEFFlgER+j8ynB6v3TT8P8Hxrg2K5P0/4F76khQZ/z80xstShs3/P+85zwb4/v8/8EI4BJ6s/z8DrLCCy9f+P5UjECftg/0/p0xY6Hq2+z+Vgg+J4Xb5P7fnwwFkzvY/9nixWvXH8z9cE7CRC3DwP9eBYozYqOk/w412/ecH4j/+xDbGYznUP0/bfMmkPrA/+VNHxZdVyL/UKaSyIjPcv+gLinSo4+W/+Kg+VZVT7b8mRkW6WiXyv8+HZvErVvW/pig6uxkv+L+TVimJaaT6v1EHwCL7q/y/xFNiW3I9/r/Al/eBWVL/v2Zmsvw75v+/g6xao7j2/78YHIGMi4P/v/sjPCWPjv6/EyzujrQb/b94zoZi8zD7v4xAIRwx1vi//Bc/lCAV9r9GhZoMGvnyvx5NPurYHe+/65MNU1HJ57+SiNkBzxLgv/GDAnguNNC/B1wUMyam0bw=","dtype":"float64","shape":[100]}}},"id":"d58f17b9-fb48-4aa9-ad84-7ff21cb1c5ce","type":"ColumnDataSource"},{"attributes":{},"id":"a04cadd9-2209-4aec-ab0a-0e1a7dae33df","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f746c9d0-ff4c-4328-8500-b472508b9ad8","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d683c2f5-074b-4610-8847-89129042e61e","type":"Circle"},{"attributes":{"data_source":{"id":"3046a97b-5f61-45fe-919d-ce528a9e9c4c","type":"ColumnDataSource"},"glyph":{"id":"5e4b04ba-54c1-4cea-9f98-550697ede4c1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d683c2f5-074b-4610-8847-89129042e61e","type":"Circle"},"selection_glyph":null,"view":{"id":"1662675f-01a6-492a-9b6c-5b108c348d24","type":"CDSView"}},"id":"cd5b59f6-4a0c-4f30-bf7f-5a0980499d35","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f12a2953-7b94-48cc-8e87-333e5fa57dfe","type":"PanTool"},{"id":"e5bb0aba-9716-4f4b-bd9b-ce35b64dda5b","type":"WheelZoomTool"},{"id":"c064755e-2d8a-49ba-a782-8d51b5c5a0fe","type":"BoxZoomTool"},{"id":"b4c84394-bb90-4552-9e46-1d868c2a8a94","type":"SaveTool"},{"id":"a04cadd9-2209-4aec-ab0a-0e1a7dae33df","type":"ResetTool"},{"id":"644ebbba-2db2-405b-96e1-2439446b1da1","type":"HelpTool"}]},"id":"d0acfba4-7cc7-428b-9658-d5a2c4052173","type":"Toolbar"},{"attributes":{"label":{"value":"sin(x)"},"renderers":[{"id":"cd5b59f6-4a0c-4f30-bf7f-5a0980499d35","type":"GlyphRenderer"},{"id":"7c484b7a-55b0-4a5a-bbbd-4309800df77e","type":"GlyphRenderer"}]},"id":"9dc5a23d-45ad-4f54-8ec0-4aa617d1c215","type":"LegendItem"},{"attributes":{"source":{"id":"3046a97b-5f61-45fe-919d-ce528a9e9c4c","type":"ColumnDataSource"}},"id":"1662675f-01a6-492a-9b6c-5b108c348d24","type":"CDSView"},{"attributes":{"below":[{"id":"6140180c-6ccf-49f9-9ac7-ee447a4857f5","type":"LinearAxis"}],"left":[{"id":"1732935f-e03f-4720-a58b-ada1655880d8","type":"LinearAxis"}],"renderers":[{"id":"6140180c-6ccf-49f9-9ac7-ee447a4857f5","type":"LinearAxis"},{"id":"73311a97-c669-4ed6-a6f5-eee996218d20","type":"Grid"},{"id":"1732935f-e03f-4720-a58b-ada1655880d8","type":"LinearAxis"},{"id":"ab3d6161-9961-4238-b36e-3ea0f56a2c1a","type":"Grid"},{"id":"f746c9d0-ff4c-4328-8500-b472508b9ad8","type":"BoxAnnotation"},{"id":"dc6f85f6-5c7d-496c-a29b-813adaaf096d","type":"Legend"},{"id":"cd5b59f6-4a0c-4f30-bf7f-5a0980499d35","type":"GlyphRenderer"},{"id":"7c484b7a-55b0-4a5a-bbbd-4309800df77e","type":"GlyphRenderer"},{"id":"ca111c40-be93-4f9c-a77d-7cea123f53e1","type":"GlyphRenderer"},{"id":"b0246372-09e4-4099-9b47-487168fbc0fc","type":"GlyphRenderer"},{"id":"4c3e53c9-c3ce-44ce-80b3-a56b60ba370d","type":"GlyphRenderer"}],"title":{"id":"423507b7-ff4b-4657-bce4-35c62f42fb27","type":"Title"},"toolbar":{"id":"d0acfba4-7cc7-428b-9658-d5a2c4052173","type":"Toolbar"},"x_range":{"id":"0ac1d017-e084-4324-881b-0834a0c57695","type":"DataRange1d"},"x_scale":{"id":"4661b595-f498-4589-a75d-a21fa82dd113","type":"LinearScale"},"y_range":{"id":"631d2e2b-0a36-4515-aa2d-84902ed7fd8f","type":"DataRange1d"},"y_scale":{"id":"67a2e88c-516d-448a-8430-b3e99ae0fd32","type":"LinearScale"}},"id":"370e952f-71a5-4e2f-8fb6-f195e040a308","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"aafe98a7-8ce3-412e-b0ed-e52ba37273fd","type":"Line"}],"root_ids":["370e952f-71a5-4e2f-8fb6-f195e040a308"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"b8cde94e-4848-4143-b9cf-342ddfce7918","elementid":"2b3e9303-cdbf-4a49-99cf-2361bbfd4629","modelid":"370e952f-71a5-4e2f-8fb6-f195e040a308"}];
                
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
