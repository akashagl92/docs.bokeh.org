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
      };var element = document.getElementById("840d1626-9bc6-432c-8a21-a602ff322226");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '840d1626-9bc6-432c-8a21-a602ff322226' but no matching script tag was found. ")
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
                    var docs_json = {"07fda7e1-52fd-46b4-8215-be181c832ce4":{"roots":{"references":[{"attributes":{"fill_color":{"value":null},"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2193cd1c-703d-46bf-a3bd-5e7710dba927","type":"Square"},{"attributes":{"callback":null},"id":"1af5266d-6616-4010-b440-18407f67126f","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"c7782477-7c08-43b7-aec8-ae4ef8e1ae78","subtype":"Figure","type":"Plot"},"ticker":{"id":"c38323c3-ea6f-4573-a35f-ef0baa64b13e","type":"BasicTicker"}},"id":"a1e60f02-080f-470b-9f63-9c340c8ca7b6","type":"Grid"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f46b93f7-6bb7-4c99-b047-2bfeb686ba14","type":"Line"},{"attributes":{},"id":"089a27d5-c52e-4c97-8cd1-6d000656e089","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6bfe8249-beb7-4776-9fff-dbce8c716fbb","type":"Circle"},{"attributes":{"line_color":{"value":"green"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ac92a50-b8fc-4885-85b3-74134147f941","type":"Line"},{"attributes":{"label":{"value":"sin(x)"},"renderers":[{"id":"61245859-e045-41c3-91ec-cae32066448c","type":"GlyphRenderer"},{"id":"c7ce7b29-b1ec-40c1-92f8-a1ac9a49d2d3","type":"GlyphRenderer"}]},"id":"744d3c0b-89ff-45e5-8e8a-06aad38ab0d4","type":"LegendItem"},{"attributes":{},"id":"fe04b231-3989-4d82-972a-b0328c74b0ce","type":"SaveTool"},{"attributes":{"data_source":{"id":"fb15ee67-eca3-4aa1-8b97-59b175945815","type":"ColumnDataSource"},"glyph":{"id":"6911fa0e-6e90-446b-aad0-238061f030fd","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8ff6769a-76bd-4265-8cf9-445d5f684276","type":"Line"},"selection_glyph":null,"view":{"id":"a000320a-1f24-4451-af2b-8a7a9097330f","type":"CDSView"}},"id":"c7ce7b29-b1ec-40c1-92f8-a1ac9a49d2d3","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0a7c0ebe-cd30-4559-ac26-e33cbc0098c2","type":"PanTool"},{"id":"9bc298ef-6f61-4e9d-b313-c537b3c36924","type":"WheelZoomTool"},{"id":"0bf58dfd-a45a-4663-8b67-2a70d8440f9e","type":"BoxZoomTool"},{"id":"fe04b231-3989-4d82-972a-b0328c74b0ce","type":"SaveTool"},{"id":"fed61a90-e578-43bb-bcb7-d0ddda96866e","type":"ResetTool"},{"id":"273cd558-c8a9-4c9f-8cea-0bd558075a3a","type":"HelpTool"}]},"id":"7bad145e-afaa-4886-bd97-53db9d6c22c9","type":"Toolbar"},{"attributes":{"data_source":{"id":"85543fe5-f52a-44c5-ad01-db7f15e7517b","type":"ColumnDataSource"},"glyph":{"id":"f46b93f7-6bb7-4c99-b047-2bfeb686ba14","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2f2e7f1c-e1b5-4827-9fd0-30c43ae3b940","type":"Line"},"selection_glyph":null,"view":{"id":"1f70c02f-52a0-42ca-b673-568372d6cbb4","type":"CDSView"}},"id":"0c1d8a9d-5e04-45b0-8868-cf3e775f079c","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"0cfeb640-acd2-4c56-b3e2-feb755907b6f","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"58fb0bb6-cc36-4fcb-85c3-4c261f85a50a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b4c46ecd-ee17-4aca-bc0a-517483c28e86","type":"ColumnDataSource"},"glyph":{"id":"2193cd1c-703d-46bf-a3bd-5e7710dba927","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"60ea62d5-519b-4c7a-8a1b-e179d13c7231","type":"Square"},"selection_glyph":null,"view":{"id":"dca07db2-e88d-44f6-beea-ec5082446af0","type":"CDSView"}},"id":"82777b0b-bf5b-4826-86cd-fc34a86a6d6a","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2*sin(x)"},"renderers":[{"id":"0c1d8a9d-5e04-45b0-8868-cf3e775f079c","type":"GlyphRenderer"}]},"id":"3a0ac136-5715-4230-9a9c-3107f3c68c36","type":"LegendItem"},{"attributes":{},"id":"0d28e74a-ffb6-44e6-9482-08d8e482f834","type":"BasicTickFormatter"},{"attributes":{},"id":"831628dd-1c64-486f-b1f7-ce9f533dc90f","type":"BasicTicker"},{"attributes":{},"id":"c38323c3-ea6f-4573-a35f-ef0baa64b13e","type":"BasicTicker"},{"attributes":{"source":{"id":"fb15ee67-eca3-4aa1-8b97-59b175945815","type":"ColumnDataSource"}},"id":"a000320a-1f24-4451-af2b-8a7a9097330f","type":"CDSView"},{"attributes":{"items":[{"id":"744d3c0b-89ff-45e5-8e8a-06aad38ab0d4","type":"LegendItem"},{"id":"3a0ac136-5715-4230-9a9c-3107f3c68c36","type":"LegendItem"},{"id":"0e4f8e80-710a-48bb-91eb-c667cb24ab4b","type":"LegendItem"}],"location":[0,-30],"plot":{"id":"c7782477-7c08-43b7-aec8-ae4ef8e1ae78","subtype":"Figure","type":"Plot"}},"id":"1b285440-9a1d-489f-b0f7-7c32c82a76f7","type":"Legend"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f2e7f1c-e1b5-4827-9fd0-30c43ae3b940","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAeZ5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+uSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/J7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMfGzMMGMA8AkU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzJJEDPTWsg/aoF44Akr4j/QL7OxiPTtP1+wo+NRofQ/FAQZ9WTz+T8oIVr7ktr+PyVTbtpUoQFAMPGzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8MHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+n710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b846WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9e5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"b4c46ecd-ee17-4aca-bc0a-517483c28e86","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"089a27d5-c52e-4c97-8cd1-6d000656e089","type":"BasicTickFormatter"},"plot":{"id":"c7782477-7c08-43b7-aec8-ae4ef8e1ae78","subtype":"Figure","type":"Plot"},"ticker":{"id":"831628dd-1c64-486f-b1f7-ce9f533dc90f","type":"BasicTicker"}},"id":"2f5187ca-ae75-4cd8-9cd8-507feb2af370","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ff6769a-76bd-4265-8cf9-445d5f684276","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8ee491a8-731e-4b20-9f50-93ee5c18a7ca","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"c7782477-7c08-43b7-aec8-ae4ef8e1ae78","subtype":"Figure","type":"Plot"},"ticker":{"id":"831628dd-1c64-486f-b1f7-ce9f533dc90f","type":"BasicTicker"}},"id":"c09bfdc4-688c-491c-9fe0-bf8f38b165ec","type":"Grid"},{"attributes":{"data_source":{"id":"9ceb1247-04b4-49c8-9d41-3e6dfd7046db","type":"ColumnDataSource"},"glyph":{"id":"3ac92a50-b8fc-4885-85b3-74134147f941","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8d298928-bffd-46f9-abde-e36695233c53","type":"Line"},"selection_glyph":null,"view":{"id":"212a3c1c-8926-4de3-94d3-a8fb5882a1de","type":"CDSView"}},"id":"affd8c43-0ace-435f-be10-bdaecfbbb534","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"8ee491a8-731e-4b20-9f50-93ee5c18a7ca","type":"BoxAnnotation"}},"id":"0bf58dfd-a45a-4663-8b67-2a70d8440f9e","type":"BoxZoomTool"},{"attributes":{"source":{"id":"58fb0bb6-cc36-4fcb-85c3-4c261f85a50a","type":"ColumnDataSource"}},"id":"2073564a-2205-4624-9bb1-2366c8a7fe1a","type":"CDSView"},{"attributes":{"label":{"value":"3*sin(x)"},"renderers":[{"id":"82777b0b-bf5b-4826-86cd-fc34a86a6d6a","type":"GlyphRenderer"},{"id":"affd8c43-0ace-435f-be10-bdaecfbbb534","type":"GlyphRenderer"}]},"id":"0e4f8e80-710a-48bb-91eb-c667cb24ab4b","type":"LegendItem"},{"attributes":{"plot":null,"text":""},"id":"d192fc12-d67a-4d50-9d78-c69676f531c9","type":"Title"},{"attributes":{},"id":"9bc298ef-6f61-4e9d-b313-c537b3c36924","type":"WheelZoomTool"},{"attributes":{"source":{"id":"85543fe5-f52a-44c5-ad01-db7f15e7517b","type":"ColumnDataSource"}},"id":"1f70c02f-52a0-42ca-b673-568372d6cbb4","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTQP5qI2QHPEuA/+5MNU1HJ5z8ZTT7q2B3vP0aFmgwa+fI/ABg/lCAV9j+IQCEcMdb4P3fOhmLzMPs/EyzujrQb/T/9Izwlj47+PxccgYyLg/8/g6xao7j2/z9mZrL8O+b/P7+X94FZUv8/xVNiW3I9/j9RB8Ai+6v8P5FWKYlppPo/oSg6uxkv+D/Th2bxK1b1PyZGRbpaJfI/8qg+VZVT7T/4C4p0qOPlP+UppLIiM9w/3FNHxZdVyD/J23zJpD6wv+3ENsZjOdS/wo12/ecH4r/dgWKM2Kjpv2MTsJELcPC/83ixWvXH87+358MBZM72v5eCD4nhdvm/rExY6Hq2+7+TIxAn7YP9vwSssILL1/6/70I4BJ6s/7/vOc8G+P7/vzTGy1KGzf+/3176khQZ/7/C8a4NiuT9vzGcHq/dNPy/l0FFlgER+r+FGZN4xoH3vx8WPFK3kfS/Cli7+O1M8b+HQNqEwoHrv9kfIiFb+OO/gKyggGI52L8EhrXMjDzAvyGGtcyMPMA/jqyggGI52D/gHyIhW/jjP39A2oTCges/DVi7+O1M8T8bFjxSt5H0P4cZk3jGgfc/lUFFlgER+j8ynB6v3TT8P8Hxrg2K5P0/4F76khQZ/z80xstShs3/P+85zwb4/v8/8EI4BJ6s/z8DrLCCy9f+P5UjECftg/0/p0xY6Hq2+z+Vgg+J4Xb5P7fnwwFkzvY/9nixWvXH8z9dE7CRC3DwP9eBYozYqOk/w412/ecH4j/+xDbGYznUP0/bfMmkPrA/+FNHxZdVyL/UKaSyIjPcv+gLinSo4+W/+Kg+VZVT7b8lRkW6WiXyv8+HZvErVvW/pig6uxkv+L+TVimJaaT6v1EHwCL7q/y/xFNiW3I9/r/Al/eBWVL/v2Zmsvw75v+/g6xao7j2/78YHIGMi4P/v/sjPCWPjv6/EyzujrQb/b94zoZi8zD7v4xAIRwx1vi//Bc/lCAV9r9GhZoMGvnyvx9NPurYHe+/65MNU1HJ57+SiNkBzxLgv/GDAnguNNC/B1wUMyam0bw=","dtype":"float64","shape":[100]}}},"id":"85543fe5-f52a-44c5-ad01-db7f15e7517b","type":"ColumnDataSource"},{"attributes":{},"id":"0a7c0ebe-cd30-4559-ac26-e33cbc0098c2","type":"PanTool"},{"attributes":{"formatter":{"id":"0d28e74a-ffb6-44e6-9482-08d8e482f834","type":"BasicTickFormatter"},"plot":{"id":"c7782477-7c08-43b7-aec8-ae4ef8e1ae78","subtype":"Figure","type":"Plot"},"ticker":{"id":"c38323c3-ea6f-4573-a35f-ef0baa64b13e","type":"BasicTicker"}},"id":"75efcc27-23b4-4b3e-a0f1-31f5ecf3caa3","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d298928-bffd-46f9-abde-e36695233c53","type":"Line"},{"attributes":{},"id":"273cd558-c8a9-4c9f-8cea-0bd558075a3a","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"60ea62d5-519b-4c7a-8a1b-e179d13c7231","type":"Square"},{"attributes":{"below":[{"id":"2f5187ca-ae75-4cd8-9cd8-507feb2af370","type":"LinearAxis"}],"left":[{"id":"75efcc27-23b4-4b3e-a0f1-31f5ecf3caa3","type":"LinearAxis"}],"renderers":[{"id":"2f5187ca-ae75-4cd8-9cd8-507feb2af370","type":"LinearAxis"},{"id":"c09bfdc4-688c-491c-9fe0-bf8f38b165ec","type":"Grid"},{"id":"75efcc27-23b4-4b3e-a0f1-31f5ecf3caa3","type":"LinearAxis"},{"id":"a1e60f02-080f-470b-9f63-9c340c8ca7b6","type":"Grid"},{"id":"8ee491a8-731e-4b20-9f50-93ee5c18a7ca","type":"BoxAnnotation"},{"id":"61245859-e045-41c3-91ec-cae32066448c","type":"GlyphRenderer"},{"id":"c7ce7b29-b1ec-40c1-92f8-a1ac9a49d2d3","type":"GlyphRenderer"},{"id":"0c1d8a9d-5e04-45b0-8868-cf3e775f079c","type":"GlyphRenderer"},{"id":"82777b0b-bf5b-4826-86cd-fc34a86a6d6a","type":"GlyphRenderer"},{"id":"affd8c43-0ace-435f-be10-bdaecfbbb534","type":"GlyphRenderer"},{"id":"1b285440-9a1d-489f-b0f7-7c32c82a76f7","type":"Legend"}],"right":[{"id":"1b285440-9a1d-489f-b0f7-7c32c82a76f7","type":"Legend"}],"title":{"id":"d192fc12-d67a-4d50-9d78-c69676f531c9","type":"Title"},"toolbar":{"id":"7bad145e-afaa-4886-bd97-53db9d6c22c9","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"0cfeb640-acd2-4c56-b3e2-feb755907b6f","type":"DataRange1d"},"x_scale":{"id":"26cecb2f-14fd-4e39-8c7f-076c2bf0e76f","type":"LinearScale"},"y_range":{"id":"1af5266d-6616-4010-b440-18407f67126f","type":"DataRange1d"},"y_scale":{"id":"a7362eaf-32e8-4b27-825c-1bdc01cdae54","type":"LinearScale"}},"id":"c7782477-7c08-43b7-aec8-ae4ef8e1ae78","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"9ceb1247-04b4-49c8-9d41-3e6dfd7046db","type":"ColumnDataSource"}},"id":"212a3c1c-8926-4de3-94d3-a8fb5882a1de","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADwgwJ4LjTAP5qI2QHPEtA/+5MNU1HJ1z8ZTT7q2B3fP0aFmgwa+eI/ABg/lCAV5j+IQCEcMdboP3fOhmLzMOs/EyzujrQb7T/9Izwlj47uPxccgYyLg+8/g6xao7j27z9mZrL8O+bvP7+X94FZUu8/xVNiW3I97j9RB8Ai+6vsP5FWKYlppOo/oSg6uxkv6D/Th2bxK1blPyZGRbpaJeI/8qg+VZVT3T/4C4p0qOPVP+UppLIiM8w/3FNHxZdVuD/J23zJpD6gv+3ENsZjOcS/wo12/ecH0r/dgWKM2KjZv2MTsJELcOC/83ixWvXH47+358MBZM7mv5eCD4nhdum/rExY6Hq267+TIxAn7YPtvwSssILL1+6/70I4BJ6s77/vOc8G+P7vvzTGy1KGze+/3176khQZ77/C8a4NiuTtvzGcHq/dNOy/l0FFlgER6r+FGZN4xoHnvx8WPFK3keS/Cli7+O1M4b+HQNqEwoHbv9kfIiFb+NO/gKyggGI5yL8EhrXMjDywvyGGtcyMPLA/jqyggGI5yD/gHyIhW/jTP39A2oTCgds/DVi7+O1M4T8bFjxSt5HkP4cZk3jGgec/lUFFlgER6j8ynB6v3TTsP8Hxrg2K5O0/4F76khQZ7z80xstShs3vP+85zwb4/u8/8EI4BJ6s7z8DrLCCy9fuP5UjECftg+0/p0xY6Hq26z+Vgg+J4XbpP7fnwwFkzuY/9nixWvXH4z9dE7CRC3DgP9eBYozYqNk/w412/ecH0j/+xDbGYznEP0/bfMmkPqA/+FNHxZdVuL/UKaSyIjPMv+gLinSo49W/+Kg+VZVT3b8lRkW6WiXiv8+HZvErVuW/pig6uxkv6L+TVimJaaTqv1EHwCL7q+y/xFNiW3I97r/Al/eBWVLvv2Zmsvw75u+/g6xao7j2778YHIGMi4Pvv/sjPCWPju6/EyzujrQb7b94zoZi8zDrv4xAIRwx1ui//Bc/lCAV5r9GhZoMGvnivx9NPurYHd+/65MNU1HJ17+SiNkBzxLQv/GDAnguNMC/B1wUMyamwbw=","dtype":"float64","shape":[100]}}},"id":"fb15ee67-eca3-4aa1-8b97-59b175945815","type":"ColumnDataSource"},{"attributes":{"source":{"id":"b4c46ecd-ee17-4aca-bc0a-517483c28e86","type":"ColumnDataSource"}},"id":"dca07db2-e88d-44f6-beea-ec5082446af0","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"46fc246c-f811-4cfd-8997-7a73e1f3a360","type":"Circle"},{"attributes":{},"id":"fed61a90-e578-43bb-bcb7-d0ddda96866e","type":"ResetTool"},{"attributes":{"data_source":{"id":"58fb0bb6-cc36-4fcb-85c3-4c261f85a50a","type":"ColumnDataSource"},"glyph":{"id":"6bfe8249-beb7-4776-9fff-dbce8c716fbb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"46fc246c-f811-4cfd-8997-7a73e1f3a360","type":"Circle"},"selection_glyph":null,"view":{"id":"2073564a-2205-4624-9bb1-2366c8a7fe1a","type":"CDSView"}},"id":"61245859-e045-41c3-91ec-cae32066448c","type":"GlyphRenderer"},{"attributes":{},"id":"26cecb2f-14fd-4e39-8c7f-076c2bf0e76f","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAACRGkt8Vz/AP5EaS3xXP9A/2qdwOgNf2D+RGkt8Vz/gPzXhXVstT+Q/2qdwOgNf6D9+boMZ2W7sP5EaS3xXP/A/433Ua0JH8j814V1bLU/0P4dE50oYV/Y/2qdwOgNf+D8sC/op7mb6P35ugxnZbvw/0NEMCcR2/j+RGkt8Vz8AQDrMD/RMQwFA433Ua0JHAkCML5njN0sDQDXhXVstTwRA3pIi0yJTBUCHROdKGFcGQDD2q8INWwdA2qdwOgNfCECDWTWy+GIJQCwL+inuZgpA1by+oeNqC0B+boMZ2W4MQCcgSJHOcg1A0NEMCcR2DkB5g9GAuXoPQJEaS3xXPxBAZnMtOFLBEEA6zA/0TEMRQA8l8q9HxRFA433Ua0JHEkC41rYnPckSQIwvmeM3SxNAYYh7nzLNE0A14V1bLU8UQAo6QBco0RRA3pIi0yJTFUCz6wSPHdUVQIdE50oYVxZAXJ3JBhPZFkAw9qvCDVsXQAVPjn4I3RdA2qdwOgNfGECuAFP2/eAYQINZNbL4YhlAV7IXbvPkGUAsC/op7mYaQABk3OXo6BpA1by+oeNqG0CpFaFd3uwbQH5ugxnZbhxAUsdl1dPwHEAnIEiRznIdQPt4Kk3J9B1A0NEMCcR2HkCkKu/EvvgeQHmD0YC5eh9ATdyzPLT8H0CRGkt8Vz8gQPtGPNpUgCBAZnMtOFLBIEDQnx6WTwIhQDrMD/RMQyFApPgAUkqEIUAPJfKvR8UhQHlR4w1FBiJA433Ua0JHIkBNqsXJP4giQLjWtic9ySJAIgOohToKI0CML5njN0sjQPZbikE1jCNAYYh7nzLNI0DLtGz9Lw4kQDXhXVstTyRAoA1PuSqQJEAKOkAXKNEkQHRmMXUlEiVA3pIi0yJTJUBJvxMxIJQlQLPrBI8d1SVAHRj27BoWJkCHROdKGFcmQPJw2KgVmCZAXJ3JBhPZJkDGybpkEBonQDD2q8INWydAmyKdIAucJ0AFT45+CN0nQG97f9wFHihA2qdwOgNfKEBE1GGYAKAoQK4AU/b94ChAGC1EVPshKUA=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"AAAAAAAAAADoxQO0RU7YP+dMxoI2HOg//C5K/vzW8T/Tua6vYlb3P+nH5xKndfw/AFIvb9iPAEBm8BjVpKACQNka5Ym2ZARADqEya8fUBUD+Gu1b6+oGQBHVYKmoogdAYgGEegr5B0DMzIX9rOwHQM+xeSHDfQdA1L6JxBWuBkB9BRBa/IAFQO0A3yZP+wNAeZ5rTFMjAkDe5Qz1oAAAQDnpZxcIOPs/tv7u/6/+9T/6iGdXvmrwP2wf+wVaJuU/5X710zFA0j+uSTsu9124v2QnUqkVVt6/o9Qx/NsL679m4Ulpoj7zvxQdiFoRqPi/bDUKCPCr/b/J7VIByxoBwPGhyyYpGQPAgTlCLtzIBMCuGkzd8SIGwAOBBKLYIQfAMzIqg3bBB8BzaxsFOv8HwKfUGL4k2gfAJ8c7bs9SB8BSNUOKZ2sGwCX1VkOmJwXAMfGzMMGMA8AkU27aVKEBwC4hWvuS2v6/DwQZ9WTz+b9lsKPjUaH0v8Yvs7GI9O2/YIF44Akr4r8GSRAz01rIvzJJEDPTWsg/aoF44Akr4j/QL7OxiPTtP1+wo+NRofQ/FAQZ9WTz+T8oIVr7ktr+PyVTbtpUoQFAMPGzMMGMA0Am9VZDpicFQFE1Q4pnawZAKMc7bs9SB0Cn1Bi+JNoHQHNrGwU6/wdANDIqg3bBB0ACgQSi2CEHQLAaTN3xIgZAfTlCLtzIBEDwocsmKRkDQMntUgHLGgFAcTUKCPCr/T8MHYhaEaj4P2HhSWmiPvM/pNQx/NsL6z99J1KpFVbeP/ZIOy73Xbg/+n710zFA0r9fH/sFWiblv+6IZ1e+avC/uv7u/6/+9b846WcXCDj7v9vlDPWgAADAfJ5rTFMjAsDuAN8mT/sDwH0FEFr8gAXA076JxBWuBsDQsXkhw30HwMzMhf2s7AfAYgGEegr5B8AS1WCpqKIHwPwa7Vvr6gbADqEya8fUBcDaGuWJtmQEwGnwGNWkoALA/VEvb9iPAMDpx+cSp3X8v9e5rq9iVve/8C5K/vzW8b/bTMaCNhzov+rFA7RFTti/CoqeTDl52rw=","dtype":"float64","shape":[100]}}},"id":"9ceb1247-04b4-49c8-9d41-3e6dfd7046db","type":"ColumnDataSource"},{"attributes":{},"id":"a7362eaf-32e8-4b27-825c-1bdc01cdae54","type":"LinearScale"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6911fa0e-6e90-446b-aad0-238061f030fd","type":"Line"}],"root_ids":["c7782477-7c08-43b7-aec8-ae4ef8e1ae78"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"07fda7e1-52fd-46b4-8215-be181c832ce4","elementid":"840d1626-9bc6-432c-8a21-a602ff322226","modelid":"c7782477-7c08-43b7-aec8-ae4ef8e1ae78"}];
                
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
