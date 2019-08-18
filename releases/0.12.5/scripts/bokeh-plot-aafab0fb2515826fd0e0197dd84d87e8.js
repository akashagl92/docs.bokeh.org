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
      };var element = document.getElementById("63268d79-2961-4f9b-ad85-ff3ca6beaca5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '63268d79-2961-4f9b-ad85-ff3ca6beaca5' but no matching script tag was found. ")
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
                var docs_json = {"ab8b6918-ac07-4512-bade-8637c962c447":{"roots":{"references":[{"attributes":{"axis_label":"Petal Length","formatter":{"id":"ee8c0f0a-d714-41a6-b119-33ac68bbaec7","type":"BasicTickFormatter"},"plot":{"id":"e238c910-41f8-438f-a761-370b6822d4b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce07f3e6-f94e-4c6b-9d08-e92fb0ea25e0","type":"BasicTicker"}},"id":"7daeb2b8-479b-470e-a534-a9915da44b72","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"066c9a66-dcda-4fea-a9af-6424d3627e23","type":"Circle"},{"attributes":{},"id":"26726941-3d6e-4b28-baf7-ff0d53744c5c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"26db5557-64b3-469c-a102-49fdd959a985","type":"ColumnDataSource"},"glyph":{"id":"721da611-d7a2-4eb2-a087-a8e94c003352","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"066c9a66-dcda-4fea-a9af-6424d3627e23","type":"Circle"},"selection_glyph":null},"id":"e7fcf8bb-7b20-4b68-8cfb-327ebdb36f1a","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"7daeb2b8-479b-470e-a534-a9915da44b72","type":"LinearAxis"}],"left":[{"id":"ae525e61-7efd-4f76-b4f5-715686feb106","type":"LinearAxis"}],"renderers":[{"id":"7daeb2b8-479b-470e-a534-a9915da44b72","type":"LinearAxis"},{"id":"85123874-580e-4f54-9be7-6b15b78387e8","type":"Grid"},{"id":"ae525e61-7efd-4f76-b4f5-715686feb106","type":"LinearAxis"},{"id":"a4986fce-dcd6-40e0-ba29-24a61915be10","type":"Grid"},{"id":"d4360205-cc55-4b64-aafd-89ef5ff174c5","type":"BoxAnnotation"},{"id":"e7fcf8bb-7b20-4b68-8cfb-327ebdb36f1a","type":"GlyphRenderer"}],"title":{"id":"aaf758a0-519f-4cc5-b5bc-92d389827aeb","type":"Title"},"tool_events":{"id":"6f99533e-3267-4b43-98be-8fc94f35a84e","type":"ToolEvents"},"toolbar":{"id":"3da9e836-eb05-4c9a-b8c5-a03157766b43","type":"Toolbar"},"x_range":{"id":"dc4c3dc5-2d6d-459b-ad11-f0a065be8348","type":"DataRange1d"},"y_range":{"id":"8ce1f438-9194-4d1d-b00e-3fb4c3348915","type":"DataRange1d"}},"id":"e238c910-41f8-438f-a761-370b6822d4b2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ce07f3e6-f94e-4c6b-9d08-e92fb0ea25e0","type":"BasicTicker"},{"attributes":{"callback":null},"id":"dc4c3dc5-2d6d-459b-ad11-f0a065be8348","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"721da611-d7a2-4eb2-a087-a8e94c003352","type":"Circle"},{"attributes":{"overlay":{"id":"d4360205-cc55-4b64-aafd-89ef5ff174c5","type":"BoxAnnotation"},"plot":{"id":"e238c910-41f8-438f-a761-370b6822d4b2","subtype":"Figure","type":"Plot"}},"id":"ec9cb4a9-3c33-4ab6-b2a6-b75104935256","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"e238c910-41f8-438f-a761-370b6822d4b2","subtype":"Figure","type":"Plot"}},"id":"fb6b3bb4-5003-44a2-a33e-44e364dc4031","type":"ResetTool"},{"attributes":{},"id":"e8b7f1c5-9992-4684-843e-23a171f0d9ee","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"80372f05-5bc6-41a9-b7d6-efc51ea8052a","type":"PanTool"},{"id":"b36e19d1-4ca0-4ec2-b717-b834cd278a51","type":"WheelZoomTool"},{"id":"ec9cb4a9-3c33-4ab6-b2a6-b75104935256","type":"BoxZoomTool"},{"id":"95a575d0-dba2-40d2-9725-ad12725d0ed4","type":"SaveTool"},{"id":"fb6b3bb4-5003-44a2-a33e-44e364dc4031","type":"ResetTool"},{"id":"86659f72-5256-4e40-9f59-61fff463dee0","type":"HelpTool"}]},"id":"3da9e836-eb05-4c9a-b8c5-a03157766b43","type":"Toolbar"},{"attributes":{"plot":{"id":"e238c910-41f8-438f-a761-370b6822d4b2","subtype":"Figure","type":"Plot"}},"id":"86659f72-5256-4e40-9f59-61fff463dee0","type":"HelpTool"},{"attributes":{"plot":{"id":"e238c910-41f8-438f-a761-370b6822d4b2","subtype":"Figure","type":"Plot"}},"id":"b36e19d1-4ca0-4ec2-b717-b834cd278a51","type":"WheelZoomTool"},{"attributes":{},"id":"6f99533e-3267-4b43-98be-8fc94f35a84e","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"line_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"x":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"y":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]}}},"id":"26db5557-64b3-469c-a102-49fdd959a985","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d4360205-cc55-4b64-aafd-89ef5ff174c5","type":"BoxAnnotation"},{"attributes":{"axis_label":"Petal Width","formatter":{"id":"e8b7f1c5-9992-4684-843e-23a171f0d9ee","type":"BasicTickFormatter"},"plot":{"id":"e238c910-41f8-438f-a761-370b6822d4b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"26726941-3d6e-4b28-baf7-ff0d53744c5c","type":"BasicTicker"}},"id":"ae525e61-7efd-4f76-b4f5-715686feb106","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"e238c910-41f8-438f-a761-370b6822d4b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"26726941-3d6e-4b28-baf7-ff0d53744c5c","type":"BasicTicker"}},"id":"a4986fce-dcd6-40e0-ba29-24a61915be10","type":"Grid"},{"attributes":{"plot":{"id":"e238c910-41f8-438f-a761-370b6822d4b2","subtype":"Figure","type":"Plot"}},"id":"95a575d0-dba2-40d2-9725-ad12725d0ed4","type":"SaveTool"},{"attributes":{"callback":null},"id":"8ce1f438-9194-4d1d-b00e-3fb4c3348915","type":"DataRange1d"},{"attributes":{"plot":{"id":"e238c910-41f8-438f-a761-370b6822d4b2","subtype":"Figure","type":"Plot"}},"id":"80372f05-5bc6-41a9-b7d6-efc51ea8052a","type":"PanTool"},{"attributes":{},"id":"ee8c0f0a-d714-41a6-b119-33ac68bbaec7","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Iris Morphology"},"id":"aaf758a0-519f-4cc5-b5bc-92d389827aeb","type":"Title"},{"attributes":{"plot":{"id":"e238c910-41f8-438f-a761-370b6822d4b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce07f3e6-f94e-4c6b-9d08-e92fb0ea25e0","type":"BasicTicker"}},"id":"85123874-580e-4f54-9be7-6b15b78387e8","type":"Grid"}],"root_ids":["e238c910-41f8-438f-a761-370b6822d4b2"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"ab8b6918-ac07-4512-bade-8637c962c447","elementid":"63268d79-2961-4f9b-ad85-ff3ca6beaca5","modelid":"e238c910-41f8-438f-a761-370b6822d4b2"}];
                
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
