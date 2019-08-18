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
      };var element = document.getElementById("bd11059b-473d-4548-83eb-157c446aded5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bd11059b-473d-4548-83eb-157c446aded5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"8f3b4e84-0dec-48f0-98ef-7889874594ae":{"roots":{"references":[{"attributes":{},"id":"19489","type":"PanTool"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"19504","type":"CategoricalColorMapper"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"19472","type":"FactorRange"},{"attributes":{},"id":"19524","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"19497","type":"BoxAnnotation"}},"id":"19491","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"19514","type":"BasicTickFormatter"},"plot":{"id":"19470","subtype":"Figure","type":"Plot"},"ticker":{"id":"19485","type":"BasicTicker"}},"id":"19484","type":"LinearAxis"},{"attributes":{},"id":"19514","type":"BasicTickFormatter"},{"attributes":{},"id":"19512","type":"CategoricalTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"19470","subtype":"Figure","type":"Plot"},"ticker":{"id":"19485","type":"BasicTicker"}},"id":"19488","type":"Grid"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"19504","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19506","type":"VBar"},{"attributes":{},"id":"19481","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"19468","type":"ColumnDataSource"},"glyph":{"id":"19506","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19507","type":"VBar"},"selection_glyph":null,"view":{"id":"19509","type":"CDSView"}},"id":"19508","type":"GlyphRenderer"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"19508","type":"GlyphRenderer"}]},"id":"19517","type":"LegendItem"},{"attributes":{},"id":"19476","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19507","type":"VBar"},{"attributes":{},"id":"19490","type":"WheelZoomTool"},{"attributes":{},"id":"19525","type":"Selection"},{"attributes":{"items":[{"id":"19517","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"19470","subtype":"Figure","type":"Plot"}},"id":"19516","type":"Legend"},{"attributes":{},"id":"19478","type":"LinearScale"},{"attributes":{"below":[{"id":"19480","type":"CategoricalAxis"}],"left":[{"id":"19484","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"19480","type":"CategoricalAxis"},{"id":"19483","type":"Grid"},{"id":"19484","type":"LinearAxis"},{"id":"19488","type":"Grid"},{"id":"19497","type":"BoxAnnotation"},{"id":"19516","type":"Legend"},{"id":"19508","type":"GlyphRenderer"}],"title":{"id":"19469","type":"Title"},"toolbar":{"id":"19495","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19472","type":"FactorRange"},"x_scale":{"id":"19476","type":"CategoricalScale"},"y_range":{"id":"19474","type":"DataRange1d"},"y_scale":{"id":"19478","type":"LinearScale"}},"id":"19470","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19494","type":"HelpTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"19470","subtype":"Figure","type":"Plot"},"ticker":{"id":"19481","type":"CategoricalTicker"}},"id":"19483","type":"Grid"},{"attributes":{"callback":null,"end":9,"start":0},"id":"19474","type":"DataRange1d"},{"attributes":{},"id":"19492","type":"SaveTool"},{"attributes":{"formatter":{"id":"19512","type":"CategoricalTickFormatter"},"plot":{"id":"19470","subtype":"Figure","type":"Plot"},"ticker":{"id":"19481","type":"CategoricalTicker"}},"id":"19480","type":"CategoricalAxis"},{"attributes":{"callback":null,"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19525","type":"Selection"},"selection_policy":{"id":"19524","type":"UnionRenderers"}},"id":"19468","type":"ColumnDataSource"},{"attributes":{},"id":"19493","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19489","type":"PanTool"},{"id":"19490","type":"WheelZoomTool"},{"id":"19491","type":"BoxZoomTool"},{"id":"19492","type":"SaveTool"},{"id":"19493","type":"ResetTool"},{"id":"19494","type":"HelpTool"}]},"id":"19495","type":"Toolbar"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"19469","type":"Title"},{"attributes":{},"id":"19485","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19497","type":"BoxAnnotation"},{"attributes":{"source":{"id":"19468","type":"ColumnDataSource"}},"id":"19509","type":"CDSView"}],"root_ids":["19470"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"8f3b4e84-0dec-48f0-98ef-7889874594ae","roots":{"19470":"bd11059b-473d-4548-83eb-157c446aded5"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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