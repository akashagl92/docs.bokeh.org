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
      };var element = document.getElementById("dfeb261a-3db7-45e3-b3a5-ff9c870e8501");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dfeb261a-3db7-45e3-b3a5-ff9c870e8501' but no matching script tag was found. ")
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
                var docs_json = {"3252b6b4-45c2-43ee-8ffc-e7ba8c197592":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"79e87fd8-7881-485c-84c6-ba03396f7e89","type":"Title"},{"attributes":{"callback":null,"column_names":["xs","ys","line_alpha","fill_alpha","fill_color","line_color"],"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"69098edc-6a71-4b04-9509-5fe3e9e999b9","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"47ef49b3-fd9d-4a97-a7a4-0cfe9601851a","type":"LinearAxis"}],"left":[{"id":"313a87d4-a262-41dc-85fc-17473c739cc5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"47ef49b3-fd9d-4a97-a7a4-0cfe9601851a","type":"LinearAxis"},{"id":"a3492de8-9797-4525-aaf5-4c0106df29d8","type":"Grid"},{"id":"313a87d4-a262-41dc-85fc-17473c739cc5","type":"LinearAxis"},{"id":"cd5dd567-ecf8-454e-8de9-af80bd6f1b7f","type":"Grid"},{"id":"41c98fd3-41d8-4254-b0a6-acc9730ee225","type":"BoxAnnotation"},{"id":"5c3cedf7-e601-4ee9-953e-be28b6b0f998","type":"GlyphRenderer"}],"title":{"id":"79e87fd8-7881-485c-84c6-ba03396f7e89","type":"Title"},"tool_events":{"id":"6b5ccb84-2914-4443-b925-1ec228f72210","type":"ToolEvents"},"toolbar":{"id":"47393e4a-34d2-49c4-951b-619d3c3db0be","type":"Toolbar"},"x_range":{"id":"b4ab97f1-2483-4f65-b613-6a8932680346","type":"DataRange1d"},"y_range":{"id":"c0c9b9a2-ff50-49bc-92fb-434b5db6810c","type":"DataRange1d"}},"id":"3b311289-a761-47f3-ade1-a81aff9266a9","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"760dcce7-e1cc-4571-affd-9065a782d3b8","type":"Patches"},{"attributes":{"overlay":{"id":"41c98fd3-41d8-4254-b0a6-acc9730ee225","type":"BoxAnnotation"},"plot":{"id":"3b311289-a761-47f3-ade1-a81aff9266a9","subtype":"Figure","type":"Plot"}},"id":"9cd586cc-e015-46c5-a6f8-0f737ec506ac","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"3b311289-a761-47f3-ade1-a81aff9266a9","subtype":"Figure","type":"Plot"}},"id":"9f0f5235-dc85-4b61-a5b3-f9dfb0dfd0a8","type":"ResetTool"},{"attributes":{"plot":{"id":"3b311289-a761-47f3-ade1-a81aff9266a9","subtype":"Figure","type":"Plot"}},"id":"fbdd100b-5e0c-4e32-b96d-1a4f497e6fec","type":"PanTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"73bfecb3-aaf3-4ae9-9d48-6ab09937f239","type":"Patches"},{"attributes":{"callback":null},"id":"c0c9b9a2-ff50-49bc-92fb-434b5db6810c","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fbdd100b-5e0c-4e32-b96d-1a4f497e6fec","type":"PanTool"},{"id":"6725ba98-0095-48d1-beea-830b567a96e1","type":"WheelZoomTool"},{"id":"9cd586cc-e015-46c5-a6f8-0f737ec506ac","type":"BoxZoomTool"},{"id":"f8785c09-06ad-42f1-b5eb-3eef56781c2a","type":"SaveTool"},{"id":"9f0f5235-dc85-4b61-a5b3-f9dfb0dfd0a8","type":"ResetTool"},{"id":"558d202c-2cfe-4a4f-be47-ab2e7442feb8","type":"HelpTool"}]},"id":"47393e4a-34d2-49c4-951b-619d3c3db0be","type":"Toolbar"},{"attributes":{"plot":{"id":"3b311289-a761-47f3-ade1-a81aff9266a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"f8780738-12fd-4ab3-bb03-affbe7fd648f","type":"BasicTicker"}},"id":"a3492de8-9797-4525-aaf5-4c0106df29d8","type":"Grid"},{"attributes":{"plot":{"id":"3b311289-a761-47f3-ade1-a81aff9266a9","subtype":"Figure","type":"Plot"}},"id":"6725ba98-0095-48d1-beea-830b567a96e1","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"3b311289-a761-47f3-ade1-a81aff9266a9","subtype":"Figure","type":"Plot"}},"id":"f8785c09-06ad-42f1-b5eb-3eef56781c2a","type":"SaveTool"},{"attributes":{},"id":"f8780738-12fd-4ab3-bb03-affbe7fd648f","type":"BasicTicker"},{"attributes":{},"id":"f9094f22-9e50-4666-82fe-17f117700ba5","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b4ab97f1-2483-4f65-b613-6a8932680346","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"41c98fd3-41d8-4254-b0a6-acc9730ee225","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"3b311289-a761-47f3-ade1-a81aff9266a9","subtype":"Figure","type":"Plot"}},"id":"558d202c-2cfe-4a4f-be47-ab2e7442feb8","type":"HelpTool"},{"attributes":{},"id":"7b7e544a-16ad-4c49-923b-f82f0f99c9ab","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"3b311289-a761-47f3-ade1-a81aff9266a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9094f22-9e50-4666-82fe-17f117700ba5","type":"BasicTicker"}},"id":"cd5dd567-ecf8-454e-8de9-af80bd6f1b7f","type":"Grid"},{"attributes":{"formatter":{"id":"3711cd04-a732-4b03-be6e-2de7e7099c03","type":"BasicTickFormatter"},"plot":{"id":"3b311289-a761-47f3-ade1-a81aff9266a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9094f22-9e50-4666-82fe-17f117700ba5","type":"BasicTicker"}},"id":"313a87d4-a262-41dc-85fc-17473c739cc5","type":"LinearAxis"},{"attributes":{"data_source":{"id":"69098edc-6a71-4b04-9509-5fe3e9e999b9","type":"ColumnDataSource"},"glyph":{"id":"73bfecb3-aaf3-4ae9-9d48-6ab09937f239","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"760dcce7-e1cc-4571-affd-9065a782d3b8","type":"Patches"},"selection_glyph":null},"id":"5c3cedf7-e601-4ee9-953e-be28b6b0f998","type":"GlyphRenderer"},{"attributes":{},"id":"3711cd04-a732-4b03-be6e-2de7e7099c03","type":"BasicTickFormatter"},{"attributes":{},"id":"6b5ccb84-2914-4443-b925-1ec228f72210","type":"ToolEvents"},{"attributes":{"formatter":{"id":"7b7e544a-16ad-4c49-923b-f82f0f99c9ab","type":"BasicTickFormatter"},"plot":{"id":"3b311289-a761-47f3-ade1-a81aff9266a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"f8780738-12fd-4ab3-bb03-affbe7fd648f","type":"BasicTicker"}},"id":"47ef49b3-fd9d-4a97-a7a4-0cfe9601851a","type":"LinearAxis"}],"root_ids":["3b311289-a761-47f3-ade1-a81aff9266a9"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"3252b6b4-45c2-43ee-8ffc-e7ba8c197592","elementid":"dfeb261a-3db7-45e3-b3a5-ff9c870e8501","modelid":"3b311289-a761-47f3-ade1-a81aff9266a9"}];
                
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
