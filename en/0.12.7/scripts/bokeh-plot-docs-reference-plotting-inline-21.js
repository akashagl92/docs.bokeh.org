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
      };var element = document.getElementById("9737f0f5-8e6a-4492-bc2e-504d855a3f4b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9737f0f5-8e6a-4492-bc2e-504d855a3f4b' but no matching script tag was found. ")
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
                var docs_json = {"68f4bf2d-6eb4-4469-9274-04888d906df0":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f5987b34-12ec-4a98-84a6-8498f6a9f34a","type":"BoxAnnotation"},{"attributes":{},"id":"ad8da58b-cd57-4ce9-89fd-335eb9d87b3d","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ad8da58b-cd57-4ce9-89fd-335eb9d87b3d","type":"PanTool"},{"id":"80e82b5a-ad5f-42b2-beff-a7134d671e32","type":"WheelZoomTool"},{"id":"f61e00c5-2db6-47f8-ba1d-20e823921cfc","type":"BoxZoomTool"},{"id":"51ea9f1a-f6f6-4f64-bb27-4f4a9235a7fc","type":"SaveTool"},{"id":"37c28c74-994d-4c10-b8d9-62059ae59dec","type":"ResetTool"},{"id":"eb77db88-87b0-454f-9154-e21a17e08da6","type":"HelpTool"}]},"id":"1bcf2a9d-e66a-4c5f-a7b5-60d1670ed14c","type":"Toolbar"},{"attributes":{"data_source":{"id":"ce39d161-5548-4de2-97b5-52a079218997","type":"ColumnDataSource"},"glyph":{"id":"a0aa24e1-cdd3-4e08-b931-dc742fbd9b18","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39bebb98-3770-47d6-882b-6376c94900eb","type":"SquareCross"},"selection_glyph":null,"view":{"id":"9d60b952-020d-432f-bd6e-c85c5fa7445b","type":"CDSView"}},"id":"273e93c1-4801-46f3-be50-5b973fe7208d","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"a2b75df4-ef98-4ce7-9b21-de57a22f34d8","type":"BasicTickFormatter"},"plot":{"id":"c6be6141-f1f5-4bcd-aecf-008351aba225","subtype":"Figure","type":"Plot"},"ticker":{"id":"b8a57c10-42c0-46fd-96e1-dae8ebdf7430","type":"BasicTicker"}},"id":"ab8a2489-37c5-4944-86bb-22987fad20c2","type":"LinearAxis"},{"attributes":{},"id":"80e82b5a-ad5f-42b2-beff-a7134d671e32","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"726b4a3d-9802-4135-bee2-b1c59934561b","type":"DataRange1d"},{"attributes":{"overlay":{"id":"f5987b34-12ec-4a98-84a6-8498f6a9f34a","type":"BoxAnnotation"}},"id":"f61e00c5-2db6-47f8-ba1d-20e823921cfc","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"c6be6141-f1f5-4bcd-aecf-008351aba225","subtype":"Figure","type":"Plot"},"ticker":{"id":"b8a57c10-42c0-46fd-96e1-dae8ebdf7430","type":"BasicTicker"}},"id":"e33f3bac-b592-40ec-8901-5838fb9f0337","type":"Grid"},{"attributes":{},"id":"51ea9f1a-f6f6-4f64-bb27-4f4a9235a7fc","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"39bebb98-3770-47d6-882b-6376c94900eb","type":"SquareCross"},{"attributes":{},"id":"37c28c74-994d-4c10-b8d9-62059ae59dec","type":"ResetTool"},{"attributes":{"callback":null},"id":"d0d8df44-20b4-466c-a06d-b34ad63702ee","type":"DataRange1d"},{"attributes":{},"id":"eb77db88-87b0-454f-9154-e21a17e08da6","type":"HelpTool"},{"attributes":{},"id":"3f7ed2f5-5c61-4253-90af-ccbea731562d","type":"LinearScale"},{"attributes":{"source":{"id":"ce39d161-5548-4de2-97b5-52a079218997","type":"ColumnDataSource"}},"id":"9d60b952-020d-432f-bd6e-c85c5fa7445b","type":"CDSView"},{"attributes":{},"id":"9c546b90-8ef1-4522-8c4b-9378376a93ce","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"ce39d161-5548-4de2-97b5-52a079218997","type":"ColumnDataSource"},{"attributes":{},"id":"b8a57c10-42c0-46fd-96e1-dae8ebdf7430","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d86a575a-5758-4ed3-96c0-aa6aa8608207","type":"BasicTickFormatter"},"plot":{"id":"c6be6141-f1f5-4bcd-aecf-008351aba225","subtype":"Figure","type":"Plot"},"ticker":{"id":"f00efcce-bc37-49f9-a5eb-d507f8e982dc","type":"BasicTicker"}},"id":"de2958b4-b347-47ed-a542-f7210525fafc","type":"LinearAxis"},{"attributes":{},"id":"f00efcce-bc37-49f9-a5eb-d507f8e982dc","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"0ee911fc-9c28-4ae0-80a4-9f9397a83a64","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"c6be6141-f1f5-4bcd-aecf-008351aba225","subtype":"Figure","type":"Plot"},"ticker":{"id":"f00efcce-bc37-49f9-a5eb-d507f8e982dc","type":"BasicTicker"}},"id":"15734f4a-6cf8-45f3-b2ac-126cfd7ffab1","type":"Grid"},{"attributes":{},"id":"d86a575a-5758-4ed3-96c0-aa6aa8608207","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a0aa24e1-cdd3-4e08-b931-dc742fbd9b18","type":"SquareCross"},{"attributes":{},"id":"a2b75df4-ef98-4ce7-9b21-de57a22f34d8","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"ab8a2489-37c5-4944-86bb-22987fad20c2","type":"LinearAxis"}],"left":[{"id":"de2958b4-b347-47ed-a542-f7210525fafc","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ab8a2489-37c5-4944-86bb-22987fad20c2","type":"LinearAxis"},{"id":"e33f3bac-b592-40ec-8901-5838fb9f0337","type":"Grid"},{"id":"de2958b4-b347-47ed-a542-f7210525fafc","type":"LinearAxis"},{"id":"15734f4a-6cf8-45f3-b2ac-126cfd7ffab1","type":"Grid"},{"id":"f5987b34-12ec-4a98-84a6-8498f6a9f34a","type":"BoxAnnotation"},{"id":"273e93c1-4801-46f3-be50-5b973fe7208d","type":"GlyphRenderer"}],"title":{"id":"0ee911fc-9c28-4ae0-80a4-9f9397a83a64","type":"Title"},"toolbar":{"id":"1bcf2a9d-e66a-4c5f-a7b5-60d1670ed14c","type":"Toolbar"},"x_range":{"id":"726b4a3d-9802-4135-bee2-b1c59934561b","type":"DataRange1d"},"x_scale":{"id":"3f7ed2f5-5c61-4253-90af-ccbea731562d","type":"LinearScale"},"y_range":{"id":"d0d8df44-20b4-466c-a06d-b34ad63702ee","type":"DataRange1d"},"y_scale":{"id":"9c546b90-8ef1-4522-8c4b-9378376a93ce","type":"LinearScale"}},"id":"c6be6141-f1f5-4bcd-aecf-008351aba225","subtype":"Figure","type":"Plot"}],"root_ids":["c6be6141-f1f5-4bcd-aecf-008351aba225"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"68f4bf2d-6eb4-4469-9274-04888d906df0","elementid":"9737f0f5-8e6a-4492-bc2e-504d855a3f4b","modelid":"c6be6141-f1f5-4bcd-aecf-008351aba225"}];
                
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
