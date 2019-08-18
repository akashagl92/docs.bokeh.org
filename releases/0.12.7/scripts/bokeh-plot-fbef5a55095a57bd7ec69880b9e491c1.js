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
      };var element = document.getElementById("379cd001-3f4c-46cd-9fec-20db7424571c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '379cd001-3f4c-46cd-9fec-20db7424571c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"b9c608d6-c3c3-478e-ac79-604e0400e490":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"b703e2e4-6317-41be-841a-eec246b2b030","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e466bc3-9027-4a29-93f1-f106c07041c5","type":"BasicTicker"}},"id":"37285e04-0170-4fef-b825-91b8c752538b","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"92fec3ea-8f3f-44e0-8da3-4c85b02a5ad2","type":"Circle"},{"attributes":{},"id":"85dbf70a-d65d-4d25-867f-a91771a90f5e","type":"LinearScale"},{"attributes":{},"id":"8880864e-018c-4301-81b7-f93eccd389b8","type":"ResetTool"},{"attributes":{},"id":"38de6a82-afbb-4c15-ab39-20b723d1684b","type":"LinearScale"},{"attributes":{},"id":"2fe04057-a42e-4062-af12-d5eb724a07f2","type":"PanTool"},{"attributes":{},"id":"57bbfdc4-2ec6-42bc-b049-213ef9fb8449","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e50b6de5-d3e6-401d-9378-ded3a4e7fcb1","type":"BasicTickFormatter"},"plot":{"id":"b703e2e4-6317-41be-841a-eec246b2b030","subtype":"Figure","type":"Plot"},"ticker":{"id":"0da38967-294d-44b5-9209-a597b331b320","type":"BasicTicker"}},"id":"2dd4c3b2-2ef3-433f-8c73-765dedaf850b","type":"LinearAxis"},{"attributes":{},"id":"d58f6200-c43c-4616-bdbd-46e117d58460","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4293617b-08cc-447b-afad-79b933bb19f8","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"4351fbb1-e829-4aee-8e73-a5dab9476cc7","type":"DataRange1d"},{"attributes":{"plot":{"id":"b703e2e4-6317-41be-841a-eec246b2b030","subtype":"Figure","type":"Plot"},"ticker":{"id":"0da38967-294d-44b5-9209-a597b331b320","type":"BasicTicker"}},"id":"1d8b88b7-0256-4623-b327-a6f740c49ab0","type":"Grid"},{"attributes":{},"id":"0ddc5b25-56b7-49ce-b8d1-add3e8723005","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"6624d754-17fb-44e6-9748-ee910d562fff","type":"Title"},{"attributes":{"source":{"id":"ab9da34e-0d0b-4755-b39d-608191e40f3e","type":"ColumnDataSource"}},"id":"615f4da3-e5a4-4a3a-9e72-c3a9d401e64a","type":"CDSView"},{"attributes":{"callback":null},"id":"4d02b576-4bdd-4f77-b377-137f38aa700c","type":"DataRange1d"},{"attributes":{"formatter":{"id":"57bbfdc4-2ec6-42bc-b049-213ef9fb8449","type":"BasicTickFormatter"},"plot":{"id":"b703e2e4-6317-41be-841a-eec246b2b030","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e466bc3-9027-4a29-93f1-f106c07041c5","type":"BasicTicker"}},"id":"d4eb3dba-4e95-4007-b56e-029e331437ab","type":"LinearAxis"},{"attributes":{},"id":"4b077777-e547-4633-8f5a-217f54857e22","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"818eb64b-9128-472a-b181-6e9651b124e4","type":"Circle"},{"attributes":{"data_source":{"id":"ab9da34e-0d0b-4755-b39d-608191e40f3e","type":"ColumnDataSource"},"glyph":{"id":"818eb64b-9128-472a-b181-6e9651b124e4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"92fec3ea-8f3f-44e0-8da3-4c85b02a5ad2","type":"Circle"},"selection_glyph":null,"view":{"id":"615f4da3-e5a4-4a3a-9e72-c3a9d401e64a","type":"CDSView"}},"id":"ec4fa4c2-2105-48db-a37d-aefff84ed5bb","type":"GlyphRenderer"},{"attributes":{},"id":"2e466bc3-9027-4a29-93f1-f106c07041c5","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"ab9da34e-0d0b-4755-b39d-608191e40f3e","type":"ColumnDataSource"},{"attributes":{},"id":"e50b6de5-d3e6-401d-9378-ded3a4e7fcb1","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2fe04057-a42e-4062-af12-d5eb724a07f2","type":"PanTool"},{"id":"0ddc5b25-56b7-49ce-b8d1-add3e8723005","type":"WheelZoomTool"},{"id":"afd98dae-a21b-4c6f-b8ff-4f6616a28841","type":"BoxZoomTool"},{"id":"4b077777-e547-4633-8f5a-217f54857e22","type":"SaveTool"},{"id":"8880864e-018c-4301-81b7-f93eccd389b8","type":"ResetTool"},{"id":"d58f6200-c43c-4616-bdbd-46e117d58460","type":"HelpTool"}]},"id":"60d61810-87d0-49e2-b861-ac964be0b62b","type":"Toolbar"},{"attributes":{},"id":"0da38967-294d-44b5-9209-a597b331b320","type":"BasicTicker"},{"attributes":{"below":[{"id":"2dd4c3b2-2ef3-433f-8c73-765dedaf850b","type":"LinearAxis"}],"left":[{"id":"d4eb3dba-4e95-4007-b56e-029e331437ab","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"2dd4c3b2-2ef3-433f-8c73-765dedaf850b","type":"LinearAxis"},{"id":"1d8b88b7-0256-4623-b327-a6f740c49ab0","type":"Grid"},{"id":"d4eb3dba-4e95-4007-b56e-029e331437ab","type":"LinearAxis"},{"id":"37285e04-0170-4fef-b825-91b8c752538b","type":"Grid"},{"id":"4293617b-08cc-447b-afad-79b933bb19f8","type":"BoxAnnotation"},{"id":"ec4fa4c2-2105-48db-a37d-aefff84ed5bb","type":"GlyphRenderer"}],"title":{"id":"6624d754-17fb-44e6-9748-ee910d562fff","type":"Title"},"toolbar":{"id":"60d61810-87d0-49e2-b861-ac964be0b62b","type":"Toolbar"},"x_range":{"id":"4351fbb1-e829-4aee-8e73-a5dab9476cc7","type":"DataRange1d"},"x_scale":{"id":"85dbf70a-d65d-4d25-867f-a91771a90f5e","type":"LinearScale"},"y_range":{"id":"4d02b576-4bdd-4f77-b377-137f38aa700c","type":"DataRange1d"},"y_scale":{"id":"38de6a82-afbb-4c15-ab39-20b723d1684b","type":"LinearScale"}},"id":"b703e2e4-6317-41be-841a-eec246b2b030","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"4293617b-08cc-447b-afad-79b933bb19f8","type":"BoxAnnotation"}},"id":"afd98dae-a21b-4c6f-b8ff-4f6616a28841","type":"BoxZoomTool"}],"root_ids":["b703e2e4-6317-41be-841a-eec246b2b030"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"b9c608d6-c3c3-478e-ac79-604e0400e490","elementid":"379cd001-3f4c-46cd-9fec-20db7424571c","modelid":"b703e2e4-6317-41be-841a-eec246b2b030"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
