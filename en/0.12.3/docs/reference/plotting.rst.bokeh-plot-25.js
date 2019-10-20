document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("cfd77cab-6354-4d25-9669-4b1305c769f2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cfd77cab-6354-4d25-9669-4b1305c769f2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"13551d88-4516-4473-b445-df2904e01d6a":{"roots":{"references":[{"attributes":{},"id":"76a1678c-ee69-487a-b49a-75215b918303","type":"BasicTicker"},{"attributes":{"callback":null},"id":"958c2fb3-5b54-4ea5-a128-8317c71d6b4d","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"82eba623-1ebc-49d7-84bc-b5c99c836e20","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"82eba623-1ebc-49d7-84bc-b5c99c836e20","type":"BoxAnnotation"},"plot":{"id":"ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd","subtype":"Figure","type":"Plot"}},"id":"0a6a1c22-fc92-4842-87a3-99d5e673383d","type":"BoxZoomTool"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"79768b83-0472-48c2-a6e0-d76e09294773","type":"Wedge"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"4585633e-d931-4377-9d7a-bc22dcf4b4e7","type":"Wedge"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"ffb9438d-45ff-4525-a721-d417555b66e2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd","subtype":"Figure","type":"Plot"}},"id":"07f32d9a-853a-4828-a429-d705ca66f363","type":"PanTool"},{"attributes":{"plot":{"id":"ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd","subtype":"Figure","type":"Plot"}},"id":"3547ce2b-47ee-468d-8b19-95db7b8e00b3","type":"HelpTool"},{"attributes":{"plot":{"id":"ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd","subtype":"Figure","type":"Plot"}},"id":"8dd2de2a-6549-49a0-a801-1f609cd5aa30","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2e7fcce-6767-4b5d-a8d8-e6bdfe2ad98a","type":"BasicTicker"}},"id":"d56b6b4e-a46f-4aae-8243-4cf3b753061e","type":"Grid"},{"attributes":{},"id":"989db740-1e35-4fc4-96ab-82f3531f9e3c","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"07f32d9a-853a-4828-a429-d705ca66f363","type":"PanTool"},{"id":"8dd2de2a-6549-49a0-a801-1f609cd5aa30","type":"WheelZoomTool"},{"id":"0a6a1c22-fc92-4842-87a3-99d5e673383d","type":"BoxZoomTool"},{"id":"a7dc48d7-ad1d-46c5-96b0-137d3166a6cc","type":"SaveTool"},{"id":"939366cf-96f2-4846-b105-01b235ce0e51","type":"ResetTool"},{"id":"3547ce2b-47ee-468d-8b19-95db7b8e00b3","type":"HelpTool"}]},"id":"04d33d84-300a-41b5-a6db-11f850680e51","type":"Toolbar"},{"attributes":{"plot":{"id":"ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd","subtype":"Figure","type":"Plot"}},"id":"a7dc48d7-ad1d-46c5-96b0-137d3166a6cc","type":"SaveTool"},{"attributes":{},"id":"2ec5e417-f4e3-44fe-9cd0-9c953808eb00","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"738bfc35-5d49-4056-b57e-c6a77717a931","type":"Title"},{"attributes":{"callback":null},"id":"f4d32c84-af23-4331-84ec-5e8d7451ca10","type":"DataRange1d"},{"attributes":{"formatter":{"id":"2ec5e417-f4e3-44fe-9cd0-9c953808eb00","type":"BasicTickFormatter"},"plot":{"id":"ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd","subtype":"Figure","type":"Plot"},"ticker":{"id":"76a1678c-ee69-487a-b49a-75215b918303","type":"BasicTicker"}},"id":"738d5940-8ff3-442b-9869-0f3822e8ed6f","type":"LinearAxis"},{"attributes":{"formatter":{"id":"989db740-1e35-4fc4-96ab-82f3531f9e3c","type":"BasicTickFormatter"},"plot":{"id":"ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2e7fcce-6767-4b5d-a8d8-e6bdfe2ad98a","type":"BasicTicker"}},"id":"45fc890e-d734-41cf-a714-3647ab326897","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd","subtype":"Figure","type":"Plot"},"ticker":{"id":"76a1678c-ee69-487a-b49a-75215b918303","type":"BasicTicker"}},"id":"f414e3e7-ea96-4f49-af21-c0a4153dbd7a","type":"Grid"},{"attributes":{"below":[{"id":"45fc890e-d734-41cf-a714-3647ab326897","type":"LinearAxis"}],"left":[{"id":"738d5940-8ff3-442b-9869-0f3822e8ed6f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"45fc890e-d734-41cf-a714-3647ab326897","type":"LinearAxis"},{"id":"d56b6b4e-a46f-4aae-8243-4cf3b753061e","type":"Grid"},{"id":"738d5940-8ff3-442b-9869-0f3822e8ed6f","type":"LinearAxis"},{"id":"f414e3e7-ea96-4f49-af21-c0a4153dbd7a","type":"Grid"},{"id":"82eba623-1ebc-49d7-84bc-b5c99c836e20","type":"BoxAnnotation"},{"id":"57c1bf29-8172-4f93-b69f-944973e06804","type":"GlyphRenderer"}],"title":{"id":"738bfc35-5d49-4056-b57e-c6a77717a931","type":"Title"},"tool_events":{"id":"3f62e607-07cf-49b5-b286-b452e706aef9","type":"ToolEvents"},"toolbar":{"id":"04d33d84-300a-41b5-a6db-11f850680e51","type":"Toolbar"},"x_range":{"id":"f4d32c84-af23-4331-84ec-5e8d7451ca10","type":"DataRange1d"},"y_range":{"id":"958c2fb3-5b54-4ea5-a128-8317c71d6b4d","type":"DataRange1d"}},"id":"ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd","subtype":"Figure","type":"Plot"}},"id":"939366cf-96f2-4846-b105-01b235ce0e51","type":"ResetTool"},{"attributes":{"data_source":{"id":"ffb9438d-45ff-4525-a721-d417555b66e2","type":"ColumnDataSource"},"glyph":{"id":"79768b83-0472-48c2-a6e0-d76e09294773","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":{"id":"4585633e-d931-4377-9d7a-bc22dcf4b4e7","type":"Wedge"},"selection_glyph":null},"id":"57c1bf29-8172-4f93-b69f-944973e06804","type":"GlyphRenderer"},{"attributes":{},"id":"3f62e607-07cf-49b5-b286-b452e706aef9","type":"ToolEvents"},{"attributes":{},"id":"c2e7fcce-6767-4b5d-a8d8-e6bdfe2ad98a","type":"BasicTicker"}],"root_ids":["ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"13551d88-4516-4473-b445-df2904e01d6a","elementid":"cfd77cab-6354-4d25-9669-4b1305c769f2","modelid":"ba609ec6-0c5a-45ef-a310-6f2ac46a6bfd"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});