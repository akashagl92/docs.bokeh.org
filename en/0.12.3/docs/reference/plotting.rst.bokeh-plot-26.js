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
      };var element = document.getElementById("defeab71-b93a-49a8-9e2b-38ff0e75c332");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'defeab71-b93a-49a8-9e2b-38ff0e75c332' but no matching script tag was found. ")
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
                  var docs_json = {"3cd1328a-cbe1-4408-b7ac-dacbc55966c0":{"roots":{"references":[{"attributes":{"plot":{"id":"d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178","subtype":"Figure","type":"Plot"}},"id":"b0388511-8d0d-4d30-b281-b445a4f2098b","type":"WheelZoomTool"},{"attributes":{},"id":"b6e2f1ec-7d8d-4e08-9710-4c79bd6deb0f","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"47abe829-5c09-4ae5-90e0-b67d8e0c34f4","type":"ColumnDataSource"},{"attributes":{},"id":"aba94f46-bf9a-4727-88ff-681defaca96e","type":"BasicTicker"},{"attributes":{"overlay":{"id":"232d1869-723b-4d84-807f-2ea0c84b8984","type":"BoxAnnotation"},"plot":{"id":"d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178","subtype":"Figure","type":"Plot"}},"id":"3b1776fe-907f-4fb0-a97c-b1d04a20018c","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"232d1869-723b-4d84-807f-2ea0c84b8984","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":null},"id":"a10d9420-f718-4043-9309-981744e1d517","type":"Title"},{"attributes":{"callback":null},"id":"907c961e-fa93-4e95-938e-f6464017d826","type":"DataRange1d"},{"attributes":{},"id":"6e308f0d-853c-436e-9c0d-ead66d36164e","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d714ebd4-c9e8-4dfa-a873-ee728b3ed870","type":"X"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2604af91-5854-4c18-8f30-41b787c1ca18","type":"X"},{"attributes":{"data_source":{"id":"47abe829-5c09-4ae5-90e0-b67d8e0c34f4","type":"ColumnDataSource"},"glyph":{"id":"2604af91-5854-4c18-8f30-41b787c1ca18","type":"X"},"hover_glyph":null,"nonselection_glyph":{"id":"d714ebd4-c9e8-4dfa-a873-ee728b3ed870","type":"X"},"selection_glyph":null},"id":"7e8a1919-c8e8-4143-9e6f-deaf867bd21e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178","subtype":"Figure","type":"Plot"}},"id":"fce3f63d-a84b-4519-9d0f-e3ee14123f3a","type":"PanTool"},{"attributes":{"plot":{"id":"d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178","subtype":"Figure","type":"Plot"}},"id":"a446295a-b98d-461e-b920-c7446fd2b2f9","type":"SaveTool"},{"attributes":{"formatter":{"id":"6e308f0d-853c-436e-9c0d-ead66d36164e","type":"BasicTickFormatter"},"plot":{"id":"d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6e2f1ec-7d8d-4e08-9710-4c79bd6deb0f","type":"BasicTicker"}},"id":"3d99ca58-8c2a-4624-bda6-36b44029ccc1","type":"LinearAxis"},{"attributes":{"plot":{"id":"d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178","subtype":"Figure","type":"Plot"}},"id":"3a5f42c1-b556-4403-a987-ca95243e122a","type":"ResetTool"},{"attributes":{"plot":{"id":"d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178","subtype":"Figure","type":"Plot"}},"id":"d58cd2b2-7413-4a3f-9a1a-6cd92ea872d3","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6e2f1ec-7d8d-4e08-9710-4c79bd6deb0f","type":"BasicTicker"}},"id":"c83eed6c-0cc9-41d8-9324-3d45acca93f4","type":"Grid"},{"attributes":{"callback":null},"id":"8f27b1d1-c41e-4ce8-aba1-eb2f1ee93538","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fce3f63d-a84b-4519-9d0f-e3ee14123f3a","type":"PanTool"},{"id":"b0388511-8d0d-4d30-b281-b445a4f2098b","type":"WheelZoomTool"},{"id":"3b1776fe-907f-4fb0-a97c-b1d04a20018c","type":"BoxZoomTool"},{"id":"a446295a-b98d-461e-b920-c7446fd2b2f9","type":"SaveTool"},{"id":"3a5f42c1-b556-4403-a987-ca95243e122a","type":"ResetTool"},{"id":"d58cd2b2-7413-4a3f-9a1a-6cd92ea872d3","type":"HelpTool"}]},"id":"b62f36a7-0485-4c37-8893-26c037464343","type":"Toolbar"},{"attributes":{"plot":{"id":"d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178","subtype":"Figure","type":"Plot"},"ticker":{"id":"aba94f46-bf9a-4727-88ff-681defaca96e","type":"BasicTicker"}},"id":"3fbe9b1f-5d30-4844-98f9-16b0c121787f","type":"Grid"},{"attributes":{"below":[{"id":"19887328-ea04-41df-8ad4-c7f0b6b43fef","type":"LinearAxis"}],"left":[{"id":"3d99ca58-8c2a-4624-bda6-36b44029ccc1","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"19887328-ea04-41df-8ad4-c7f0b6b43fef","type":"LinearAxis"},{"id":"3fbe9b1f-5d30-4844-98f9-16b0c121787f","type":"Grid"},{"id":"3d99ca58-8c2a-4624-bda6-36b44029ccc1","type":"LinearAxis"},{"id":"c83eed6c-0cc9-41d8-9324-3d45acca93f4","type":"Grid"},{"id":"232d1869-723b-4d84-807f-2ea0c84b8984","type":"BoxAnnotation"},{"id":"7e8a1919-c8e8-4143-9e6f-deaf867bd21e","type":"GlyphRenderer"}],"title":{"id":"a10d9420-f718-4043-9309-981744e1d517","type":"Title"},"tool_events":{"id":"2dc214b1-5e5d-461c-b350-5928e4ede2c0","type":"ToolEvents"},"toolbar":{"id":"b62f36a7-0485-4c37-8893-26c037464343","type":"Toolbar"},"x_range":{"id":"8f27b1d1-c41e-4ce8-aba1-eb2f1ee93538","type":"DataRange1d"},"y_range":{"id":"907c961e-fa93-4e95-938e-f6464017d826","type":"DataRange1d"}},"id":"d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2dc214b1-5e5d-461c-b350-5928e4ede2c0","type":"ToolEvents"},{"attributes":{},"id":"42754f21-72ce-4d00-9927-2c679c763c7f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"42754f21-72ce-4d00-9927-2c679c763c7f","type":"BasicTickFormatter"},"plot":{"id":"d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178","subtype":"Figure","type":"Plot"},"ticker":{"id":"aba94f46-bf9a-4727-88ff-681defaca96e","type":"BasicTicker"}},"id":"19887328-ea04-41df-8ad4-c7f0b6b43fef","type":"LinearAxis"}],"root_ids":["d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"3cd1328a-cbe1-4408-b7ac-dacbc55966c0","elementid":"defeab71-b93a-49a8-9e2b-38ff0e75c332","modelid":"d1c7dc5f-c96e-4ec3-b5c3-3c18138e1178"}];
                  
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