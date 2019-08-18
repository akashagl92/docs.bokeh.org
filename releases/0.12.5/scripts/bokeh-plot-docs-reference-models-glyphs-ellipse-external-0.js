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
      };var element = document.getElementById("30a503c3-93eb-46eb-878a-e92484b7dcc4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '30a503c3-93eb-46eb-878a-e92484b7dcc4' but no matching script tag was found. ")
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
                var docs_json = {"40b1fe1f-b3f7-43f6-85fa-04ea05dee32c":{"roots":{"references":[{"attributes":{},"id":"1bdd770d-d42e-4fc3-9d89-40071c9aad82","type":"BasicTickFormatter"},{"attributes":{},"id":"28742bc6-9fa3-47b4-99af-4d46d35b2770","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cda21ee4-246b-461e-9128-0a587587f841","type":"Ellipse"},{"attributes":{},"id":"009e1ea5-24f5-47a1-9157-73abf30f913b","type":"ToolEvents"},{"attributes":{"below":[{"id":"251cf87f-40f0-4519-8dd5-815fbbe193ef","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9ff51ebe-148e-42d6-8c9c-72ccc49a732a","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"469af568-ccb2-44fb-a7f3-7e142ea988c7","type":"GlyphRenderer"},{"id":"251cf87f-40f0-4519-8dd5-815fbbe193ef","type":"LinearAxis"},{"id":"9ff51ebe-148e-42d6-8c9c-72ccc49a732a","type":"LinearAxis"},{"id":"cc3978b0-955e-4ba5-a784-557d0965d277","type":"Grid"},{"id":"9415e7ec-3335-4491-af8f-ea4b358e42b3","type":"Grid"}],"title":null,"tool_events":{"id":"009e1ea5-24f5-47a1-9157-73abf30f913b","type":"ToolEvents"},"toolbar":{"id":"d8cf871e-4d5d-48e3-80ef-30d7eb1a76a2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b3971633-ec24-4ede-bbc2-aa300f1940e7","type":"DataRange1d"},"y_range":{"id":"7b29cd26-3ffc-4b25-b496-7c9cecc7cc71","type":"DataRange1d"}},"id":"18528184-adf5-4e07-bfa8-9e6146170fb2","type":"Plot"},{"attributes":{"formatter":{"id":"1bdd770d-d42e-4fc3-9d89-40071c9aad82","type":"BasicTickFormatter"},"plot":{"id":"18528184-adf5-4e07-bfa8-9e6146170fb2","type":"Plot"},"ticker":{"id":"8481c315-b56d-45ae-9d0b-e1f6fe4052e7","type":"BasicTicker"}},"id":"251cf87f-40f0-4519-8dd5-815fbbe193ef","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"18528184-adf5-4e07-bfa8-9e6146170fb2","type":"Plot"},"ticker":{"id":"28742bc6-9fa3-47b4-99af-4d46d35b2770","type":"BasicTicker"}},"id":"9415e7ec-3335-4491-af8f-ea4b358e42b3","type":"Grid"},{"attributes":{"formatter":{"id":"a5fd83cc-635a-43ac-8733-37bf142879af","type":"BasicTickFormatter"},"plot":{"id":"18528184-adf5-4e07-bfa8-9e6146170fb2","type":"Plot"},"ticker":{"id":"28742bc6-9fa3-47b4-99af-4d46d35b2770","type":"BasicTicker"}},"id":"9ff51ebe-148e-42d6-8c9c-72ccc49a732a","type":"LinearAxis"},{"attributes":{"callback":null},"id":"b3971633-ec24-4ede-bbc2-aa300f1940e7","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["w","x","h","y"],"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"ae2eccbf-6d7e-4522-b137-9bf63f014a7c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"18528184-adf5-4e07-bfa8-9e6146170fb2","type":"Plot"},"ticker":{"id":"8481c315-b56d-45ae-9d0b-e1f6fe4052e7","type":"BasicTicker"}},"id":"cc3978b0-955e-4ba5-a784-557d0965d277","type":"Grid"},{"attributes":{},"id":"a5fd83cc-635a-43ac-8733-37bf142879af","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d8cf871e-4d5d-48e3-80ef-30d7eb1a76a2","type":"Toolbar"},{"attributes":{"callback":null},"id":"7b29cd26-3ffc-4b25-b496-7c9cecc7cc71","type":"DataRange1d"},{"attributes":{"data_source":{"id":"ae2eccbf-6d7e-4522-b137-9bf63f014a7c","type":"ColumnDataSource"},"glyph":{"id":"cda21ee4-246b-461e-9128-0a587587f841","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null},"id":"469af568-ccb2-44fb-a7f3-7e142ea988c7","type":"GlyphRenderer"},{"attributes":{},"id":"8481c315-b56d-45ae-9d0b-e1f6fe4052e7","type":"BasicTicker"}],"root_ids":["18528184-adf5-4e07-bfa8-9e6146170fb2"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"40b1fe1f-b3f7-43f6-85fa-04ea05dee32c","elementid":"30a503c3-93eb-46eb-878a-e92484b7dcc4","modelid":"18528184-adf5-4e07-bfa8-9e6146170fb2"}];
                
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
