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
      };var element = document.getElementById("c02396bd-ce63-479d-aab9-ed04ab8fcf9e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c02396bd-ce63-479d-aab9-ed04ab8fcf9e' but no matching script tag was found. ")
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
                var docs_json = {"ba6aac53-3a14-4667-8bfc-66c0c35a15e3":{"roots":{"references":[{"attributes":{},"id":"59000a18-cd1b-41cd-a4f7-bd99c25e325d","type":"BasicTicker"},{"attributes":{"source":{"id":"ea9cb3f1-5646-4fc0-9ba6-0d9912fec173","type":"ColumnDataSource"}},"id":"d258df60-2fe6-4968-aeb2-3066667592e8","type":"CDSView"},{"attributes":{"formatter":{"id":"005711b2-b0a1-44ad-86aa-9ac133648fd5","type":"BasicTickFormatter"},"plot":{"id":"4a9eba81-8771-49c6-bc60-fd375649831d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5030da0-0fd7-46f7-abac-f1240bcae176","type":"BasicTicker"}},"id":"c0c62308-1940-4681-a7b4-d4ab84b390de","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"b1b64ec7-2bcb-48e6-a784-77160d574d90","type":"Title"},{"attributes":{},"id":"a5030da0-0fd7-46f7-abac-f1240bcae176","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"ab9111ee-a511-4b3a-9812-a6837056542f","type":"VBar"},{"attributes":{"dimension":1,"plot":{"id":"4a9eba81-8771-49c6-bc60-fd375649831d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5030da0-0fd7-46f7-abac-f1240bcae176","type":"BasicTicker"}},"id":"6be4580e-6d30-44f1-bcd3-5f85ed460768","type":"Grid"},{"attributes":{},"id":"617afe68-7bc8-4d05-8176-6484519bc1ba","type":"BasicTickFormatter"},{"attributes":{},"id":"005711b2-b0a1-44ad-86aa-9ac133648fd5","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1,2,3],"x":[1,2,3]}},"id":"ea9cb3f1-5646-4fc0-9ba6-0d9912fec173","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ea9cb3f1-5646-4fc0-9ba6-0d9912fec173","type":"ColumnDataSource"},"glyph":{"id":"f6b8deeb-a96a-4bf2-85ed-8407ce37ec62","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ab9111ee-a511-4b3a-9812-a6837056542f","type":"VBar"},"selection_glyph":null,"view":{"id":"d258df60-2fe6-4968-aeb2-3066667592e8","type":"CDSView"}},"id":"a4eb3197-9f92-45a6-a9ef-6288037ae8b5","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1f927914-23d4-4984-ab26-0593fea6b7b2","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"69fe305d-84e1-43d3-bbef-4c44c75c12d6","type":"LinearAxis"}],"left":[{"id":"c0c62308-1940-4681-a7b4-d4ab84b390de","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"69fe305d-84e1-43d3-bbef-4c44c75c12d6","type":"LinearAxis"},{"id":"230c401a-2a09-4cc1-a85b-3249da2e2f0c","type":"Grid"},{"id":"c0c62308-1940-4681-a7b4-d4ab84b390de","type":"LinearAxis"},{"id":"6be4580e-6d30-44f1-bcd3-5f85ed460768","type":"Grid"},{"id":"1f927914-23d4-4984-ab26-0593fea6b7b2","type":"BoxAnnotation"},{"id":"a4eb3197-9f92-45a6-a9ef-6288037ae8b5","type":"GlyphRenderer"}],"title":{"id":"b1b64ec7-2bcb-48e6-a784-77160d574d90","type":"Title"},"toolbar":{"id":"e9f993a9-e400-4c62-90a4-d2b36cd4f2ef","type":"Toolbar"},"x_range":{"id":"df3e8d66-d653-4bff-8d8d-fd4c5fc2d705","type":"DataRange1d"},"x_scale":{"id":"56381aaa-3547-4ea6-b6f4-5ee7684941df","type":"LinearScale"},"y_range":{"id":"67100816-a382-4437-8b84-12282c1ebaa7","type":"DataRange1d"},"y_scale":{"id":"d0d8980d-1187-4996-865a-5fc4711ec1e0","type":"LinearScale"}},"id":"4a9eba81-8771-49c6-bc60-fd375649831d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8a0f51c4-6d82-4fe9-a043-6e8be618d281","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8a0f51c4-6d82-4fe9-a043-6e8be618d281","type":"PanTool"},{"id":"58b6ff18-2f91-4910-a029-f75ea24917f2","type":"WheelZoomTool"},{"id":"1c743d82-ade1-4f44-96ba-45d9cfc69151","type":"BoxZoomTool"},{"id":"bad06252-bd1c-4826-95f1-e3e9626e8b05","type":"SaveTool"},{"id":"0d3b83d6-05d0-4fe1-8355-a6830f3837eb","type":"ResetTool"},{"id":"0f173751-f29e-4a85-ad1e-243c8c0eab5e","type":"HelpTool"}]},"id":"e9f993a9-e400-4c62-90a4-d2b36cd4f2ef","type":"Toolbar"},{"attributes":{"formatter":{"id":"617afe68-7bc8-4d05-8176-6484519bc1ba","type":"BasicTickFormatter"},"plot":{"id":"4a9eba81-8771-49c6-bc60-fd375649831d","subtype":"Figure","type":"Plot"},"ticker":{"id":"59000a18-cd1b-41cd-a4f7-bd99c25e325d","type":"BasicTicker"}},"id":"69fe305d-84e1-43d3-bbef-4c44c75c12d6","type":"LinearAxis"},{"attributes":{},"id":"58b6ff18-2f91-4910-a029-f75ea24917f2","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"df3e8d66-d653-4bff-8d8d-fd4c5fc2d705","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1f927914-23d4-4984-ab26-0593fea6b7b2","type":"BoxAnnotation"}},"id":"1c743d82-ade1-4f44-96ba-45d9cfc69151","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"4a9eba81-8771-49c6-bc60-fd375649831d","subtype":"Figure","type":"Plot"},"ticker":{"id":"59000a18-cd1b-41cd-a4f7-bd99c25e325d","type":"BasicTicker"}},"id":"230c401a-2a09-4cc1-a85b-3249da2e2f0c","type":"Grid"},{"attributes":{},"id":"bad06252-bd1c-4826-95f1-e3e9626e8b05","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"f6b8deeb-a96a-4bf2-85ed-8407ce37ec62","type":"VBar"},{"attributes":{},"id":"0d3b83d6-05d0-4fe1-8355-a6830f3837eb","type":"ResetTool"},{"attributes":{"callback":null},"id":"67100816-a382-4437-8b84-12282c1ebaa7","type":"DataRange1d"},{"attributes":{},"id":"0f173751-f29e-4a85-ad1e-243c8c0eab5e","type":"HelpTool"},{"attributes":{},"id":"56381aaa-3547-4ea6-b6f4-5ee7684941df","type":"LinearScale"},{"attributes":{},"id":"d0d8980d-1187-4996-865a-5fc4711ec1e0","type":"LinearScale"}],"root_ids":["4a9eba81-8771-49c6-bc60-fd375649831d"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"ba6aac53-3a14-4667-8bfc-66c0c35a15e3","elementid":"c02396bd-ce63-479d-aab9-ed04ab8fcf9e","modelid":"4a9eba81-8771-49c6-bc60-fd375649831d"}];
                
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
