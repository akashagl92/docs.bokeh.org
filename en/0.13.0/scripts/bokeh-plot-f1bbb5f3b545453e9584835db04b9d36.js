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
      };var element = document.getElementById("84e42d70-e58e-4553-ba2a-2811d6247f01");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '84e42d70-e58e-4553-ba2a-2811d6247f01' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"33973b0e-f4ad-4e54-9c2e-5bb7cc86306e":{"roots":{"references":[{"attributes":{},"id":"7b342b35-770f-49d3-ae79-b63f809df887","type":"BasicTicker"},{"attributes":{},"id":"9542c8ee-4419-44a8-a020-996f8be1a0b5","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"8b090b90-9c80-469d-81eb-bc566ca5cca6","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b342b35-770f-49d3-ae79-b63f809df887","type":"BasicTicker"}},"id":"f28e54da-eeb9-4644-b740-5f727e137805","type":"Grid"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"43115072-8d22-4cb4-91f6-52ca93491210","type":"CategoricalColorMapper"},{"attributes":{},"id":"e3af2fe0-749a-4d0c-a817-ce2dc409d70f","type":"PanTool"},{"attributes":{},"id":"90752f7c-0e16-4a34-ab39-f49367aa59af","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"0ad7ec62-48ed-4253-b89b-500c3ae5755b","type":"BoxAnnotation"}},"id":"7c45920f-e496-4740-b111-0e9143e2e14e","type":"BoxZoomTool"},{"attributes":{},"id":"d65a9f1d-9c05-4f11-9bbf-94c0b1b17d26","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0ad7ec62-48ed-4253-b89b-500c3ae5755b","type":"BoxAnnotation"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"43115072-8d22-4cb4-91f6-52ca93491210","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"71f8b9a2-7140-4fb8-a86c-680ea1d644cc","type":"VBar"},{"attributes":{},"id":"42c5e448-a442-4c49-a097-fc420c9f4be5","type":"WheelZoomTool"},{"attributes":{},"id":"ecdf4e7f-c211-4e88-b9fc-ba4b8835aca6","type":"SaveTool"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"39ef1d5f-8a6d-4983-83fc-45ebf881edf2","type":"GlyphRenderer"}]},"id":"5d25ddce-1678-4d83-b9e5-898025266ecd","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"9de1121d-4000-488b-a570-358e17a674a9","type":"VBar"},{"attributes":{},"id":"a6ea3ab7-f4e9-4f70-a4dd-6c302ab94c30","type":"CategoricalTickFormatter"},{"attributes":{},"id":"e822f080-1deb-4fdb-ac69-7d4f7366a184","type":"Selection"},{"attributes":{"items":[{"id":"5d25ddce-1678-4d83-b9e5-898025266ecd","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"8b090b90-9c80-469d-81eb-bc566ca5cca6","subtype":"Figure","type":"Plot"}},"id":"ccc76784-df6b-4500-b50d-14ac0ab1a440","type":"Legend"},{"attributes":{"source":{"id":"af619505-4b1c-4232-973d-c4e3aeaf6d21","type":"ColumnDataSource"}},"id":"fc84cffb-75cd-44a6-97bd-bbef41b0fbb6","type":"CDSView"},{"attributes":{"callback":null,"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"e822f080-1deb-4fdb-ac69-7d4f7366a184","type":"Selection"},"selection_policy":{"id":"90752f7c-0e16-4a34-ab39-f49367aa59af","type":"UnionRenderers"}},"id":"af619505-4b1c-4232-973d-c4e3aeaf6d21","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"0ad662a8-f36b-4994-a1ab-5fa1bbf00cd3","type":"CategoricalAxis"}],"left":[{"id":"401deb6c-deaa-4f56-9e89-10502b419b5a","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"0ad662a8-f36b-4994-a1ab-5fa1bbf00cd3","type":"CategoricalAxis"},{"id":"54cb5441-509f-4b59-b433-71ffe05ecdba","type":"Grid"},{"id":"401deb6c-deaa-4f56-9e89-10502b419b5a","type":"LinearAxis"},{"id":"f28e54da-eeb9-4644-b740-5f727e137805","type":"Grid"},{"id":"0ad7ec62-48ed-4253-b89b-500c3ae5755b","type":"BoxAnnotation"},{"id":"ccc76784-df6b-4500-b50d-14ac0ab1a440","type":"Legend"},{"id":"39ef1d5f-8a6d-4983-83fc-45ebf881edf2","type":"GlyphRenderer"}],"title":{"id":"82e711f1-b362-4e96-9d23-1763e543be59","type":"Title"},"toolbar":{"id":"1daa3d65-1967-4c86-939f-cfdca3fa4a71","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3396cac6-f690-4265-975e-f2372a3eb16e","type":"FactorRange"},"x_scale":{"id":"0debe2c1-9f71-4785-b6e2-b4648036b5cc","type":"CategoricalScale"},"y_range":{"id":"a256c3c1-43a3-49b0-947d-1d4c600b061f","type":"DataRange1d"},"y_scale":{"id":"da00cb00-4f4f-4683-bb51-17a4e018b07b","type":"LinearScale"}},"id":"8b090b90-9c80-469d-81eb-bc566ca5cca6","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"82e711f1-b362-4e96-9d23-1763e543be59","type":"Title"},{"attributes":{},"id":"53dc45d5-5fa5-47ae-97f8-01f5c4898d82","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"3396cac6-f690-4265-975e-f2372a3eb16e","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e3af2fe0-749a-4d0c-a817-ce2dc409d70f","type":"PanTool"},{"id":"42c5e448-a442-4c49-a097-fc420c9f4be5","type":"WheelZoomTool"},{"id":"7c45920f-e496-4740-b111-0e9143e2e14e","type":"BoxZoomTool"},{"id":"ecdf4e7f-c211-4e88-b9fc-ba4b8835aca6","type":"SaveTool"},{"id":"d65a9f1d-9c05-4f11-9bbf-94c0b1b17d26","type":"ResetTool"},{"id":"9542c8ee-4419-44a8-a020-996f8be1a0b5","type":"HelpTool"}]},"id":"1daa3d65-1967-4c86-939f-cfdca3fa4a71","type":"Toolbar"},{"attributes":{"data_source":{"id":"af619505-4b1c-4232-973d-c4e3aeaf6d21","type":"ColumnDataSource"},"glyph":{"id":"71f8b9a2-7140-4fb8-a86c-680ea1d644cc","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9de1121d-4000-488b-a570-358e17a674a9","type":"VBar"},"selection_glyph":null,"view":{"id":"fc84cffb-75cd-44a6-97bd-bbef41b0fbb6","type":"CDSView"}},"id":"39ef1d5f-8a6d-4983-83fc-45ebf881edf2","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"53dc45d5-5fa5-47ae-97f8-01f5c4898d82","type":"BasicTickFormatter"},"plot":{"id":"8b090b90-9c80-469d-81eb-bc566ca5cca6","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b342b35-770f-49d3-ae79-b63f809df887","type":"BasicTicker"}},"id":"401deb6c-deaa-4f56-9e89-10502b419b5a","type":"LinearAxis"},{"attributes":{},"id":"0debe2c1-9f71-4785-b6e2-b4648036b5cc","type":"CategoricalScale"},{"attributes":{"callback":null,"end":9,"start":0},"id":"a256c3c1-43a3-49b0-947d-1d4c600b061f","type":"DataRange1d"},{"attributes":{},"id":"da00cb00-4f4f-4683-bb51-17a4e018b07b","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"8b090b90-9c80-469d-81eb-bc566ca5cca6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6c0b589-31f5-4463-86d4-a112d9c52b54","type":"CategoricalTicker"}},"id":"54cb5441-509f-4b59-b433-71ffe05ecdba","type":"Grid"},{"attributes":{"formatter":{"id":"a6ea3ab7-f4e9-4f70-a4dd-6c302ab94c30","type":"CategoricalTickFormatter"},"plot":{"id":"8b090b90-9c80-469d-81eb-bc566ca5cca6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6c0b589-31f5-4463-86d4-a112d9c52b54","type":"CategoricalTicker"}},"id":"0ad662a8-f36b-4994-a1ab-5fa1bbf00cd3","type":"CategoricalAxis"},{"attributes":{},"id":"a6c0b589-31f5-4463-86d4-a112d9c52b54","type":"CategoricalTicker"}],"root_ids":["8b090b90-9c80-469d-81eb-bc566ca5cca6"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"33973b0e-f4ad-4e54-9c2e-5bb7cc86306e","roots":{"8b090b90-9c80-469d-81eb-bc566ca5cca6":"84e42d70-e58e-4553-ba2a-2811d6247f01"}}];
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