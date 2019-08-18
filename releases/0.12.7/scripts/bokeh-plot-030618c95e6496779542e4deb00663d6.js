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
      };var element = document.getElementById("15299193-1be6-4348-9841-73e511c4cc7f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '15299193-1be6-4348-9841-73e511c4cc7f' but no matching script tag was found. ")
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
                var docs_json = {"8d6651cb-fc24-4f02-8a2c-ad65db68172d":{"roots":{"references":[{"attributes":{"formatter":{"id":"a9e4f4d7-6be0-4aea-8741-2aefa11b6bb0","type":"BasicTickFormatter"},"plot":{"id":"29da9735-1c52-43d5-b1ff-403f1111a321","subtype":"Figure","type":"Plot"},"ticker":{"id":"009354b5-a3f1-4518-81b9-8e32e6578e2c","type":"BasicTicker"}},"id":"935d8012-368e-4532-9ffd-3ee63b5441dc","type":"LinearAxis"},{"attributes":{},"id":"1ec7a71b-eac0-4ed6-bc1b-eff821e5a491","type":"ResetTool"},{"attributes":{},"id":"009354b5-a3f1-4518-81b9-8e32e6578e2c","type":"BasicTicker"},{"attributes":{"plot":{"id":"29da9735-1c52-43d5-b1ff-403f1111a321","subtype":"Figure","type":"Plot"},"ticker":{"id":"009354b5-a3f1-4518-81b9-8e32e6578e2c","type":"BasicTicker"}},"id":"0402ee81-77cb-4588-a5cd-bd5cfa531ee1","type":"Grid"},{"attributes":{"below":[{"id":"935d8012-368e-4532-9ffd-3ee63b5441dc","type":"LinearAxis"}],"left":[{"id":"18df8f8c-8d81-453f-b572-29a486d8381e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"935d8012-368e-4532-9ffd-3ee63b5441dc","type":"LinearAxis"},{"id":"0402ee81-77cb-4588-a5cd-bd5cfa531ee1","type":"Grid"},{"id":"18df8f8c-8d81-453f-b572-29a486d8381e","type":"LinearAxis"},{"id":"24271e47-ecb4-4eca-b146-93c5741d04ee","type":"Grid"},{"id":"9584eef8-5631-4e35-ac62-0954b01fb3c0","type":"BoxAnnotation"},{"id":"d430424a-3532-476d-affd-9c619d5781e5","type":"GlyphRenderer"}],"title":{"id":"37c22107-a818-47d1-a2b0-88c846604c09","type":"Title"},"toolbar":{"id":"8515a784-48a0-4da5-b286-6ff498a41b55","type":"Toolbar"},"x_range":{"id":"9556dba4-6556-4a64-8461-5d749a18a657","type":"DataRange1d"},"x_scale":{"id":"5d49e5f4-78e1-4f0d-964a-6ef732696cca","type":"LinearScale"},"y_range":{"id":"b7a7c780-ac0e-4b98-b15b-31131bdda9b7","type":"DataRange1d"},"y_scale":{"id":"8cde9f83-524e-4fdb-ba2b-857102313e36","type":"LinearScale"}},"id":"29da9735-1c52-43d5-b1ff-403f1111a321","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9584eef8-5631-4e35-ac62-0954b01fb3c0","type":"BoxAnnotation"},{"attributes":{},"id":"7c0fe675-f60a-4327-a686-2c59e5a85192","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"29da9735-1c52-43d5-b1ff-403f1111a321","subtype":"Figure","type":"Plot"},"ticker":{"id":"b7d247a3-35b7-4a30-b495-181eb66ad3c6","type":"BasicTicker"}},"id":"24271e47-ecb4-4eca-b146-93c5741d04ee","type":"Grid"},{"attributes":{"callback":null},"id":"b7a7c780-ac0e-4b98-b15b-31131bdda9b7","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"de9a4e40-a746-4c3b-8c41-077630cd84d8","type":"Segment"},{"attributes":{"callback":null},"id":"9556dba4-6556-4a64-8461-5d749a18a657","type":"DataRange1d"},{"attributes":{},"id":"742cce40-1af8-4a5c-827b-6e9267bd608f","type":"SaveTool"},{"attributes":{},"id":"faeb0c5c-215a-4072-a658-13e96f621c5e","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"92113dfb-4332-4697-a725-5472ca4039bf","type":"Segment"},{"attributes":{"data_source":{"id":"8e4e5512-dbbb-48e7-a99e-faf78bc31bea","type":"ColumnDataSource"},"glyph":{"id":"de9a4e40-a746-4c3b-8c41-077630cd84d8","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"92113dfb-4332-4697-a725-5472ca4039bf","type":"Segment"},"selection_glyph":null,"view":{"id":"d1a77aae-5f66-4022-b6a8-48e2f18b940c","type":"CDSView"}},"id":"d430424a-3532-476d-affd-9c619d5781e5","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7c0fe675-f60a-4327-a686-2c59e5a85192","type":"PanTool"},{"id":"faeb0c5c-215a-4072-a658-13e96f621c5e","type":"WheelZoomTool"},{"id":"4359007b-bbef-4a7e-b6a1-0614676e134c","type":"BoxZoomTool"},{"id":"742cce40-1af8-4a5c-827b-6e9267bd608f","type":"SaveTool"},{"id":"1ec7a71b-eac0-4ed6-bc1b-eff821e5a491","type":"ResetTool"},{"id":"e8822ede-7ec5-4783-ac22-52a3a8ac2e4d","type":"HelpTool"}]},"id":"8515a784-48a0-4da5-b286-6ff498a41b55","type":"Toolbar"},{"attributes":{},"id":"a9e4f4d7-6be0-4aea-8741-2aefa11b6bb0","type":"BasicTickFormatter"},{"attributes":{},"id":"8cde9f83-524e-4fdb-ba2b-857102313e36","type":"LinearScale"},{"attributes":{"overlay":{"id":"9584eef8-5631-4e35-ac62-0954b01fb3c0","type":"BoxAnnotation"}},"id":"4359007b-bbef-4a7e-b6a1-0614676e134c","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"8e4e5512-dbbb-48e7-a99e-faf78bc31bea","type":"ColumnDataSource"},{"attributes":{},"id":"5d49e5f4-78e1-4f0d-964a-6ef732696cca","type":"LinearScale"},{"attributes":{},"id":"d51df0c7-ea70-457d-b6ef-4132bc476119","type":"BasicTickFormatter"},{"attributes":{},"id":"e8822ede-7ec5-4783-ac22-52a3a8ac2e4d","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"37c22107-a818-47d1-a2b0-88c846604c09","type":"Title"},{"attributes":{},"id":"b7d247a3-35b7-4a30-b495-181eb66ad3c6","type":"BasicTicker"},{"attributes":{"source":{"id":"8e4e5512-dbbb-48e7-a99e-faf78bc31bea","type":"ColumnDataSource"}},"id":"d1a77aae-5f66-4022-b6a8-48e2f18b940c","type":"CDSView"},{"attributes":{"formatter":{"id":"d51df0c7-ea70-457d-b6ef-4132bc476119","type":"BasicTickFormatter"},"plot":{"id":"29da9735-1c52-43d5-b1ff-403f1111a321","subtype":"Figure","type":"Plot"},"ticker":{"id":"b7d247a3-35b7-4a30-b495-181eb66ad3c6","type":"BasicTicker"}},"id":"18df8f8c-8d81-453f-b572-29a486d8381e","type":"LinearAxis"}],"root_ids":["29da9735-1c52-43d5-b1ff-403f1111a321"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"8d6651cb-fc24-4f02-8a2c-ad65db68172d","elementid":"15299193-1be6-4348-9841-73e511c4cc7f","modelid":"29da9735-1c52-43d5-b1ff-403f1111a321"}];
                
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
