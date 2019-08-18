(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("5d332f82-422c-400a-aa8f-b07337973456");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5d332f82-422c-400a-aa8f-b07337973456' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"80a98e80-a61c-4b0c-996f-7b76ef3af35d":{"roots":{"references":[{"attributes":{"location":"top_left","plot":{"id":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7","subtype":"Chart","type":"Plot"}},"id":"fa6e2c5a-1749-4e02-aaf6-35b0b004cc74","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d46cc84b-5559-4dfa-a80d-7b595ff74402","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7","subtype":"Chart","type":"Plot"}},"id":"34aeab5c-806b-4b9d-b2de-8d5e9c3a5422","type":"PanTool"},{"attributes":{"plot":{"id":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7","subtype":"Chart","type":"Plot"}},"id":"e7579906-124d-49d1-ad07-0707d235d92f","type":"ResetTool"},{"attributes":{"axis_label":"Miles Per Gallon","formatter":{"id":"3a7ba653-8ef2-4759-81c6-2d567b0ff755","type":"BasicTickFormatter"},"plot":{"id":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7","subtype":"Chart","type":"Plot"},"ticker":{"id":"74cebc1d-00c0-4c64-9750-de675f277e15","type":"BasicTicker"}},"id":"87b1011e-e9d6-4fad-ab30-aad0426f170a","type":"LinearAxis"},{"attributes":{"overlay":{"id":"d46cc84b-5559-4dfa-a80d-7b595ff74402","type":"BoxAnnotation"},"plot":{"id":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7","subtype":"Chart","type":"Plot"}},"id":"d9745154-9e69-4ea2-82be-6e04edb42008","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"HP vs MPG"},"id":"5e4fbe3b-152f-4988-b986-e44f22b56523","type":"Title"},{"attributes":{"below":[{"id":"87b1011e-e9d6-4fad-ab30-aad0426f170a","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"62888a23-4fad-42b6-aedb-0d2a7571782f","type":"LinearAxis"}],"renderers":[{"id":"d46cc84b-5559-4dfa-a80d-7b595ff74402","type":"BoxAnnotation"},{"id":"7d92d4b4-e9c6-49fa-8a59-3c8a86f26b38","type":"GlyphRenderer"},{"id":"fa6e2c5a-1749-4e02-aaf6-35b0b004cc74","type":"Legend"},{"id":"87b1011e-e9d6-4fad-ab30-aad0426f170a","type":"LinearAxis"},{"id":"62888a23-4fad-42b6-aedb-0d2a7571782f","type":"LinearAxis"},{"id":"f9276185-3e68-43d2-8100-ff6970b73ee2","type":"Grid"},{"id":"463106f6-9b65-46a2-9710-c4220a61753e","type":"Grid"}],"title":{"id":"5e4fbe3b-152f-4988-b986-e44f22b56523","type":"Title"},"tool_events":{"id":"d23069c6-f5af-462c-99f2-9e0097044846","type":"ToolEvents"},"toolbar":{"id":"9dd23854-4836-43b2-9e93-12d61c6d938f","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"ea79a97a-cb1a-4a33-8fb7-e24762028e66","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"c56a2e20-261f-4219-95b2-d852d8de6b14","type":"Range1d"}},"id":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"74cebc1d-00c0-4c64-9750-de675f277e15","type":"BasicTicker"},{"attributes":{"plot":{"id":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7","subtype":"Chart","type":"Plot"},"ticker":{"id":"74cebc1d-00c0-4c64-9750-de675f277e15","type":"BasicTicker"}},"id":"f9276185-3e68-43d2-8100-ff6970b73ee2","type":"Grid"},{"attributes":{},"id":"b5b8f8bd-0bd0-4338-8d8e-7dc3ee0de9d1","type":"BasicTickFormatter"},{"attributes":{},"id":"d23069c6-f5af-462c-99f2-9e0097044846","type":"ToolEvents"},{"attributes":{"data_source":{"id":"09e76b71-35f4-418e-b51b-d6c35f189ad0","type":"ColumnDataSource"},"glyph":{"id":"1c6adcad-ea70-43b0-8192-5d2975efd8ae","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"7d92d4b4-e9c6-49fa-8a59-3c8a86f26b38","type":"GlyphRenderer"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"b5b8f8bd-0bd0-4338-8d8e-7dc3ee0de9d1","type":"BasicTickFormatter"},"plot":{"id":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7","subtype":"Chart","type":"Plot"},"ticker":{"id":"1f70ae99-94d8-4b5d-8a46-8a3ddf475588","type":"BasicTicker"}},"id":"62888a23-4fad-42b6-aedb-0d2a7571782f","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"1c6adcad-ea70-43b0-8192-5d2975efd8ae","type":"Circle"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQAAAAAAAADtAAAAAAAAAPEAAAAAAAAA5QAAAAAAAADNAAAAAAAAAMEAAAAAAAAAxQAAAAAAAADNAAAAAAAAAMkAAAAAAAAAsQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAADJAAAAAAAAANkAAAAAAAAAzQAAAAAAAADJAAAAAAAAAN0AAAAAAAAA8QAAAAAAAAD5AAAAAAAAAPkAAAAAAAAA/QAAAAAAAgEFAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA3QAAAAAAAADRAAAAAAAAANUAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADFAAAAAAAAAJkAAAAAAAAAqQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADVAAAAAAAAAOkAAAAAAAAA2QAAAAAAAADxAAAAAAAAAN0AAAAAAAAA8QAAAAAAAADtAAAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAA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","dtype":"float64","shape":[392]},"y_values":[130,165,150,150,140,198,220,215,225,190,170,160,150,225,95,95,97,85,88,46,87,90,95,113,90,215,200,210,193,88,90,95,100,105,100,88,100,165,175,153,150,180,170,175,110,72,100,88,86,90,70,76,65,69,60,70,95,80,54,90,86,165,175,150,153,150,208,155,160,190,97,150,130,140,150,112,76,87,69,86,92,97,80,88,175,150,145,137,150,198,150,158,150,215,225,175,105,100,100,88,95,46,150,167,170,180,100,88,72,94,90,85,107,90,145,230,49,75,91,112,150,110,122,180,95,100,100,67,80,65,75,100,110,105,140,150,150,140,150,83,67,78,52,61,75,75,75,97,93,67,95,105,72,72,170,145,150,148,110,105,110,95,110,110,129,75,83,100,78,96,71,97,97,70,90,95,88,98,115,53,86,81,92,79,83,140,150,120,152,100,105,81,90,52,60,70,53,100,78,110,95,71,70,75,72,102,150,88,108,120,180,145,130,150,68,80,58,96,70,145,110,145,130,110,105,100,98,180,170,190,149,78,88,75,89,63,83,67,78,97,110,110,48,66,52,70,60,110,140,139,105,95,85,88,100,90,105,85,110,120,145,165,139,140,68,95,97,75,95,105,85,97,103,125,115,133,71,68,115,85,88,90,110,130,129,138,135,155,142,125,150,71,65,80,80,77,125,71,90,70,70,65,69,90,115,115,90,76,60,70,65,90,88,90,90,78,90,75,92,75,65,105,65,48,48,67,67,67,67,62,132,100,88,72,84,84,92,110,84,58,64,60,67,65,62,68,63,65,65,74,75,75,100,74,80,76,116,120,110,105,88,85,88,88,88,85,84,90,92,74,68,68,63,70,88,75,70,67,67,67,110,85,92,112,96,84,90,86,52,84,79,82]}},"id":"09e76b71-35f4-418e-b51b-d6c35f189ad0","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"c56a2e20-261f-4219-95b2-d852d8de6b14","type":"Range1d"},{"attributes":{"plot":{"id":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7","subtype":"Chart","type":"Plot"}},"id":"c9136796-a26e-4f54-9a4e-39d39cc0dd3c","type":"SaveTool"},{"attributes":{"plot":{"id":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7","subtype":"Chart","type":"Plot"}},"id":"4dab9c98-c185-4577-b383-b4baf0ab9fe1","type":"HelpTool"},{"attributes":{},"id":"3a7ba653-8ef2-4759-81c6-2d567b0ff755","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"34aeab5c-806b-4b9d-b2de-8d5e9c3a5422","type":"PanTool"},{"id":"c71f84ee-7358-47f1-918a-cf4347e8402e","type":"WheelZoomTool"},{"id":"d9745154-9e69-4ea2-82be-6e04edb42008","type":"BoxZoomTool"},{"id":"c9136796-a26e-4f54-9a4e-39d39cc0dd3c","type":"SaveTool"},{"id":"e7579906-124d-49d1-ad07-0707d235d92f","type":"ResetTool"},{"id":"4dab9c98-c185-4577-b383-b4baf0ab9fe1","type":"HelpTool"}]},"id":"9dd23854-4836-43b2-9e93-12d61c6d938f","type":"Toolbar"},{"attributes":{},"id":"1f70ae99-94d8-4b5d-8a46-8a3ddf475588","type":"BasicTicker"},{"attributes":{"plot":{"id":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7","subtype":"Chart","type":"Plot"}},"id":"c71f84ee-7358-47f1-918a-cf4347e8402e","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":50.36,"start":5.24},"id":"ea79a97a-cb1a-4a33-8fb7-e24762028e66","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7","subtype":"Chart","type":"Plot"},"ticker":{"id":"1f70ae99-94d8-4b5d-8a46-8a3ddf475588","type":"BasicTicker"}},"id":"463106f6-9b65-46a2-9710-c4220a61753e","type":"Grid"}],"root_ids":["bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"80a98e80-a61c-4b0c-996f-7b76ef3af35d","elementid":"5d332f82-422c-400a-aa8f-b07337973456","modelid":"bbf2a5cb-294d-43f7-bed5-b4228bbdcdb7"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
