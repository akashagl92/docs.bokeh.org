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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("fc95bffe-6eb1-4194-a6b2-26e2ffd96c7a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc95bffe-6eb1-4194-a6b2-26e2ffd96c7a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"54e86632-58ba-4dd2-be07-21de450eae01":{"roots":{"references":[{"attributes":{"plot":{"id":"dfdeac57-9e13-4c63-9b57-60d6ba9046cb","subtype":"Figure","type":"Plot"}},"id":"7936df81-6c24-4bcc-8b4c-76ebd8212213","type":"HelpTool"},{"attributes":{},"id":"6ad1d2e2-7274-45ba-a21e-bc4e27d4d623","type":"BasicTicker"},{"attributes":{"children":[{"id":"6ab5f3fb-fbbb-4bf7-bafe-bf12763217e0","subtype":"Figure","type":"Plot"},{"id":"dfdeac57-9e13-4c63-9b57-60d6ba9046cb","subtype":"Figure","type":"Plot"}]},"id":"01a3f22f-474c-415b-9e80-916889a5c0c7","type":"Row"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"30589aa0-1c56-4c93-9f9b-0743e5b8d397","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"0126d043-9e5e-418d-bb00-4101bcb04f7c","type":"Circle"},{"attributes":{},"id":"83f5ca08-50e5-4cf2-bbd2-7e54f974f766","type":"LinearScale"},{"attributes":{"children":[{"id":"656ecfec-b603-49b4-a663-461c73e7c3b6","type":"ToolbarBox"},{"id":"d7d37ca3-3b37-4161-9e8f-b117852baf2c","type":"Column"}]},"id":"69b2ff26-83a1-44c3-a4dc-20773b14d891","type":"Column"},{"attributes":{},"id":"c5762a25-5ef7-4237-bea2-f72f37639d7a","type":"ToolEvents"},{"attributes":{},"id":"95ae5e68-e728-4beb-964f-95417ff136b4","type":"LinearScale"},{"attributes":{},"id":"bcacd6e0-8d8d-4014-9370-661b5a71fcdc","type":"BasicTickFormatter"},{"attributes":{},"id":"96d617cb-3485-4942-bcfb-5f03851de110","type":"LinearScale"},{"attributes":{},"id":"5fd1df62-dcc0-4a98-b1ee-9f5ea856c370","type":"BasicTicker"},{"attributes":{},"id":"fcea645c-06c0-4d28-87c5-be69dd062979","type":"ToolEvents"},{"attributes":{"callback":null},"id":"ef51c170-9bc1-4bc6-81f9-59461c1f744c","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bd277e65-816c-4906-ac4a-822dfbcf32f2","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"d06f9486-1efe-4f23-9c1d-f49799732839","type":"LinearAxis"}],"left":[{"id":"760d2da0-3d3c-4088-844d-e5c1286063c9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d06f9486-1efe-4f23-9c1d-f49799732839","type":"LinearAxis"},{"id":"967ceed6-531f-416b-81e3-590e416089d0","type":"Grid"},{"id":"760d2da0-3d3c-4088-844d-e5c1286063c9","type":"LinearAxis"},{"id":"2845d20a-1f08-4572-8edf-c8d01b926c00","type":"Grid"},{"id":"2e2f9b33-ac57-4a97-9648-349d9bd64e3e","type":"BoxAnnotation"},{"id":"3e834afe-f2d6-4265-9ea2-46e88dc18a68","type":"PolyAnnotation"},{"id":"92a6930b-c21f-4175-adce-dbd0395c6479","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"fcea645c-06c0-4d28-87c5-be69dd062979","type":"ToolEvents"},"toolbar":{"id":"174130d7-7d1f-46c3-bc66-1656b21378ce","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ef51c170-9bc1-4bc6-81f9-59461c1f744c","type":"DataRange1d"},"x_scale":{"id":"7eabd431-90e6-4ab0-8ae7-53b93c167d47","type":"LinearScale"},"y_range":{"id":"a85e7a8c-bc91-4190-9757-6193e5b12cbe","type":"DataRange1d"},"y_scale":{"id":"96d617cb-3485-4942-bcfb-5f03851de110","type":"LinearScale"}},"id":"6ab5f3fb-fbbb-4bf7-bafe-bf12763217e0","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"3e834afe-f2d6-4265-9ea2-46e88dc18a68","type":"PolyAnnotation"},"plot":{"id":"6ab5f3fb-fbbb-4bf7-bafe-bf12763217e0","subtype":"Figure","type":"Plot"}},"id":"adc6b131-8e9e-4717-a0dc-0309f79ccca5","type":"LassoSelectTool"},{"attributes":{"callback":null,"column_names":["y1","y0","x"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"0923c81c-605b-4a7a-986d-9f21cd76e40e","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"acaf091b-0e6f-47d4-8254-803adfb51199","type":"BoxSelectTool"},{"id":"adc6b131-8e9e-4717-a0dc-0309f79ccca5","type":"LassoSelectTool"},{"id":"798db2f3-54da-47c4-a56d-42f8f4d2aacf","type":"HelpTool"}]},"id":"174130d7-7d1f-46c3-bc66-1656b21378ce","type":"Toolbar"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"acaf091b-0e6f-47d4-8254-803adfb51199","type":"BoxSelectTool"},{"id":"adc6b131-8e9e-4717-a0dc-0309f79ccca5","type":"LassoSelectTool"},{"id":"798db2f3-54da-47c4-a56d-42f8f4d2aacf","type":"HelpTool"},{"id":"f2006c4f-f703-4f65-af8a-d0434faf62a0","type":"BoxSelectTool"},{"id":"045a5023-f46b-4a02-b48e-d9d3657dfca6","type":"LassoSelectTool"},{"id":"7936df81-6c24-4bcc-8b4c-76ebd8212213","type":"HelpTool"}]},"id":"656ecfec-b603-49b4-a663-461c73e7c3b6","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f2006c4f-f703-4f65-af8a-d0434faf62a0","type":"BoxSelectTool"},{"id":"045a5023-f46b-4a02-b48e-d9d3657dfca6","type":"LassoSelectTool"},{"id":"7936df81-6c24-4bcc-8b4c-76ebd8212213","type":"HelpTool"}]},"id":"7d69ad54-272f-4e8b-87c9-d429479e8d61","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"2e2f9b33-ac57-4a97-9648-349d9bd64e3e","type":"BoxAnnotation"},"plot":{"id":"6ab5f3fb-fbbb-4bf7-bafe-bf12763217e0","subtype":"Figure","type":"Plot"},"renderers":[{"id":"92a6930b-c21f-4175-adce-dbd0395c6479","type":"GlyphRenderer"}]},"id":"acaf091b-0e6f-47d4-8254-803adfb51199","type":"BoxSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"fd6bea9f-222b-4241-98cf-ae52d7ec8b9d","type":"Circle"},{"attributes":{},"id":"fcadb96f-a8fb-417a-84c2-c793348cc4c1","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2e2f9b33-ac57-4a97-9648-349d9bd64e3e","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"49f36839-7de3-47e2-81a2-1325fc19513e","type":"PolyAnnotation"},"plot":{"id":"dfdeac57-9e13-4c63-9b57-60d6ba9046cb","subtype":"Figure","type":"Plot"}},"id":"045a5023-f46b-4a02-b48e-d9d3657dfca6","type":"LassoSelectTool"},{"attributes":{},"id":"7eabd431-90e6-4ab0-8ae7-53b93c167d47","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"bd277e65-816c-4906-ac4a-822dfbcf32f2","type":"BoxAnnotation"},"plot":{"id":"dfdeac57-9e13-4c63-9b57-60d6ba9046cb","subtype":"Figure","type":"Plot"},"renderers":[{"id":"a6ee2fb4-29e2-4a5b-a832-4a5f38dac5d9","type":"GlyphRenderer"}]},"id":"f2006c4f-f703-4f65-af8a-d0434faf62a0","type":"BoxSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"3e834afe-f2d6-4265-9ea2-46e88dc18a68","type":"PolyAnnotation"},{"attributes":{},"id":"b72adbbf-e146-4e0b-bacc-8f026bbacc3a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"bcacd6e0-8d8d-4014-9370-661b5a71fcdc","type":"BasicTickFormatter"},"plot":{"id":"6ab5f3fb-fbbb-4bf7-bafe-bf12763217e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"688920a0-34f1-4334-93d5-0c9197a2e9dc","type":"BasicTicker"}},"id":"d06f9486-1efe-4f23-9c1d-f49799732839","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"dfdeac57-9e13-4c63-9b57-60d6ba9046cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"fcadb96f-a8fb-417a-84c2-c793348cc4c1","type":"BasicTicker"}},"id":"b3dc7280-285a-408f-b7e3-0575c8349ea1","type":"Grid"},{"attributes":{"children":[{"id":"01a3f22f-474c-415b-9e80-916889a5c0c7","type":"Row"}]},"id":"d7d37ca3-3b37-4161-9e8f-b117852baf2c","type":"Column"},{"attributes":{"plot":{"id":"6ab5f3fb-fbbb-4bf7-bafe-bf12763217e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"688920a0-34f1-4334-93d5-0c9197a2e9dc","type":"BasicTicker"}},"id":"967ceed6-531f-416b-81e3-590e416089d0","type":"Grid"},{"attributes":{"callback":null},"id":"42ba4efd-8876-49dd-80ef-6012f47b1f7c","type":"DataRange1d"},{"attributes":{},"id":"b493e793-c83a-4184-9987-60b14a0dcd2a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6ab5f3fb-fbbb-4bf7-bafe-bf12763217e0","subtype":"Figure","type":"Plot"}},"id":"798db2f3-54da-47c4-a56d-42f8f4d2aacf","type":"HelpTool"},{"attributes":{"below":[{"id":"450f8263-53bf-4001-8b76-04b1f9eff54e","type":"LinearAxis"}],"left":[{"id":"b797491b-d523-4394-8e49-4038d94cba2c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"450f8263-53bf-4001-8b76-04b1f9eff54e","type":"LinearAxis"},{"id":"87fa5b32-b00f-40b4-99ae-fc75dc781e59","type":"Grid"},{"id":"b797491b-d523-4394-8e49-4038d94cba2c","type":"LinearAxis"},{"id":"b3dc7280-285a-408f-b7e3-0575c8349ea1","type":"Grid"},{"id":"bd277e65-816c-4906-ac4a-822dfbcf32f2","type":"BoxAnnotation"},{"id":"49f36839-7de3-47e2-81a2-1325fc19513e","type":"PolyAnnotation"},{"id":"a6ee2fb4-29e2-4a5b-a832-4a5f38dac5d9","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"c5762a25-5ef7-4237-bea2-f72f37639d7a","type":"ToolEvents"},"toolbar":{"id":"7d69ad54-272f-4e8b-87c9-d429479e8d61","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"42ba4efd-8876-49dd-80ef-6012f47b1f7c","type":"DataRange1d"},"x_scale":{"id":"95ae5e68-e728-4beb-964f-95417ff136b4","type":"LinearScale"},"y_range":{"id":"6a12207b-3849-4994-9ded-caa977c8af10","type":"DataRange1d"},"y_scale":{"id":"83f5ca08-50e5-4cf2-bbd2-7e54f974f766","type":"LinearScale"}},"id":"dfdeac57-9e13-4c63-9b57-60d6ba9046cb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"688920a0-34f1-4334-93d5-0c9197a2e9dc","type":"BasicTicker"},{"attributes":{"callback":null},"id":"6a12207b-3849-4994-9ded-caa977c8af10","type":"DataRange1d"},{"attributes":{},"id":"0cf0a162-f19d-4c26-b27e-ed88cdd9658e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"0923c81c-605b-4a7a-986d-9f21cd76e40e","type":"ColumnDataSource"},"glyph":{"id":"30589aa0-1c56-4c93-9f9b-0743e5b8d397","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fd6bea9f-222b-4241-98cf-ae52d7ec8b9d","type":"Circle"},"selection_glyph":null},"id":"a6ee2fb4-29e2-4a5b-a832-4a5f38dac5d9","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"b72adbbf-e146-4e0b-bacc-8f026bbacc3a","type":"BasicTickFormatter"},"plot":{"id":"6ab5f3fb-fbbb-4bf7-bafe-bf12763217e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ad1d2e2-7274-45ba-a21e-bc4e27d4d623","type":"BasicTicker"}},"id":"760d2da0-3d3c-4088-844d-e5c1286063c9","type":"LinearAxis"},{"attributes":{"callback":null},"id":"a85e7a8c-bc91-4190-9757-6193e5b12cbe","type":"DataRange1d"},{"attributes":{"data_source":{"id":"0923c81c-605b-4a7a-986d-9f21cd76e40e","type":"ColumnDataSource"},"glyph":{"id":"d89b88be-2a13-4c62-93c3-3bb7f6f44e99","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0126d043-9e5e-418d-bb00-4101bcb04f7c","type":"Circle"},"selection_glyph":null},"id":"92a6930b-c21f-4175-adce-dbd0395c6479","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"dfdeac57-9e13-4c63-9b57-60d6ba9046cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"5fd1df62-dcc0-4a98-b1ee-9f5ea856c370","type":"BasicTicker"}},"id":"87fa5b32-b00f-40b4-99ae-fc75dc781e59","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"49f36839-7de3-47e2-81a2-1325fc19513e","type":"PolyAnnotation"},{"attributes":{"formatter":{"id":"b493e793-c83a-4184-9987-60b14a0dcd2a","type":"BasicTickFormatter"},"plot":{"id":"dfdeac57-9e13-4c63-9b57-60d6ba9046cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"fcadb96f-a8fb-417a-84c2-c793348cc4c1","type":"BasicTicker"}},"id":"b797491b-d523-4394-8e49-4038d94cba2c","type":"LinearAxis"},{"attributes":{"formatter":{"id":"0cf0a162-f19d-4c26-b27e-ed88cdd9658e","type":"BasicTickFormatter"},"plot":{"id":"dfdeac57-9e13-4c63-9b57-60d6ba9046cb","subtype":"Figure","type":"Plot"},"ticker":{"id":"5fd1df62-dcc0-4a98-b1ee-9f5ea856c370","type":"BasicTicker"}},"id":"450f8263-53bf-4001-8b76-04b1f9eff54e","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"d89b88be-2a13-4c62-93c3-3bb7f6f44e99","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"6ab5f3fb-fbbb-4bf7-bafe-bf12763217e0","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ad1d2e2-7274-45ba-a21e-bc4e27d4d623","type":"BasicTicker"}},"id":"2845d20a-1f08-4572-8edf-c8d01b926c00","type":"Grid"}],"root_ids":["69b2ff26-83a1-44c3-a4dc-20773b14d891"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"54e86632-58ba-4dd2-be07-21de450eae01","elementid":"fc95bffe-6eb1-4194-a6b2-26e2ffd96c7a","modelid":"69b2ff26-83a1-44c3-a4dc-20773b14d891"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
