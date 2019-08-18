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
      };var element = document.getElementById("21350e93-d96d-4042-ac49-fda4cb128c47");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '21350e93-d96d-4042-ac49-fda4cb128c47' but no matching script tag was found. ")
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
                var docs_json = {"bcc5be9c-c032-4eca-950b-2fe7ea1deec8":{"roots":{"references":[{"attributes":{"plot":{"id":"dd61f929-f99b-4e5b-b042-23a42bc16385","subtype":"Figure","type":"Plot"},"ticker":{"id":"07bd6b67-abe1-4c44-a96d-c02952c8208b","type":"BasicTicker"}},"id":"6b7a388c-9de1-46a5-a537-b80ac012f695","type":"Grid"},{"attributes":{"callback":null},"id":"ab773987-bd63-4f90-9099-6f92157ec3e9","type":"DataRange1d"},{"attributes":{},"id":"ab4b88cb-6941-4387-8341-55a5868e9f39","type":"WheelZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a393d6aa-155b-48dd-b33b-dbbce3c7b35d","type":"Oval"},{"attributes":{},"id":"5c063939-d967-42fd-af61-574fd51b2bfc","type":"SaveTool"},{"attributes":{"callback":null},"id":"6fd70cbb-5755-4f95-b229-3c6d1d805055","type":"DataRange1d"},{"attributes":{"overlay":{"id":"49f98534-de01-421e-af2e-e223b097171a","type":"BoxAnnotation"}},"id":"a55b533f-3523-4e3a-be0b-6cd6192b6500","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"4c67d698-cb15-4942-91f9-1510d2e655a5","type":"BasicTickFormatter"},"plot":{"id":"dd61f929-f99b-4e5b-b042-23a42bc16385","subtype":"Figure","type":"Plot"},"ticker":{"id":"07bd6b67-abe1-4c44-a96d-c02952c8208b","type":"BasicTicker"}},"id":"d970c4ae-305c-4308-bdcc-01084b4d5a7b","type":"LinearAxis"},{"attributes":{},"id":"5d8f6d36-fe3b-41be-a8f0-43a503c01a4e","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d9f07d56-c526-4061-97b3-7ed43ac9d0a6","type":"ColumnDataSource"},"glyph":{"id":"1e8838cb-deae-406e-986c-249ee371afda","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a393d6aa-155b-48dd-b33b-dbbce3c7b35d","type":"Oval"},"selection_glyph":null,"view":{"id":"428cb3e3-7196-48f9-9da2-eb7c01a5c207","type":"CDSView"}},"id":"bcb395c1-b74e-4e17-9a18-cda5a36370b0","type":"GlyphRenderer"},{"attributes":{},"id":"75f7412d-09d2-40ec-a71c-643d028e3246","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f87b328d-fee3-42f5-ac4b-f3f927fbe986","type":"PanTool"},{"id":"ab4b88cb-6941-4387-8341-55a5868e9f39","type":"WheelZoomTool"},{"id":"a55b533f-3523-4e3a-be0b-6cd6192b6500","type":"BoxZoomTool"},{"id":"5c063939-d967-42fd-af61-574fd51b2bfc","type":"SaveTool"},{"id":"75f7412d-09d2-40ec-a71c-643d028e3246","type":"ResetTool"},{"id":"9660d78f-2104-4a3b-86a3-32147df22a45","type":"HelpTool"}]},"id":"9b768041-1423-446e-b794-9806d85b69c2","type":"Toolbar"},{"attributes":{"formatter":{"id":"6eda0d05-f1ee-4ed3-b7d6-ac123a3fedd6","type":"BasicTickFormatter"},"plot":{"id":"dd61f929-f99b-4e5b-b042-23a42bc16385","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d8f6d36-fe3b-41be-a8f0-43a503c01a4e","type":"BasicTicker"}},"id":"0cb23008-9ae5-429c-aa13-8f74eb301447","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"49f98534-de01-421e-af2e-e223b097171a","type":"BoxAnnotation"},{"attributes":{},"id":"2e98f38d-a888-4221-8349-83f414f3463c","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"dd61f929-f99b-4e5b-b042-23a42bc16385","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d8f6d36-fe3b-41be-a8f0-43a503c01a4e","type":"BasicTicker"}},"id":"bbaa38f1-de3e-44ad-afdd-47f93f50d97a","type":"Grid"},{"attributes":{},"id":"9660d78f-2104-4a3b-86a3-32147df22a45","type":"HelpTool"},{"attributes":{"below":[{"id":"d970c4ae-305c-4308-bdcc-01084b4d5a7b","type":"LinearAxis"}],"left":[{"id":"0cb23008-9ae5-429c-aa13-8f74eb301447","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d970c4ae-305c-4308-bdcc-01084b4d5a7b","type":"LinearAxis"},{"id":"6b7a388c-9de1-46a5-a537-b80ac012f695","type":"Grid"},{"id":"0cb23008-9ae5-429c-aa13-8f74eb301447","type":"LinearAxis"},{"id":"bbaa38f1-de3e-44ad-afdd-47f93f50d97a","type":"Grid"},{"id":"49f98534-de01-421e-af2e-e223b097171a","type":"BoxAnnotation"},{"id":"bcb395c1-b74e-4e17-9a18-cda5a36370b0","type":"GlyphRenderer"}],"title":{"id":"065dbdc5-dcd3-4f04-84d4-2f325ea0df08","type":"Title"},"toolbar":{"id":"9b768041-1423-446e-b794-9806d85b69c2","type":"Toolbar"},"x_range":{"id":"ab773987-bd63-4f90-9099-6f92157ec3e9","type":"DataRange1d"},"x_scale":{"id":"a7eb6aea-8ed7-4280-a70a-6fb80a518447","type":"LinearScale"},"y_range":{"id":"6fd70cbb-5755-4f95-b229-3c6d1d805055","type":"DataRange1d"},"y_scale":{"id":"2e98f38d-a888-4221-8349-83f414f3463c","type":"LinearScale"}},"id":"dd61f929-f99b-4e5b-b042-23a42bc16385","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4c67d698-cb15-4942-91f9-1510d2e655a5","type":"BasicTickFormatter"},{"attributes":{},"id":"a7eb6aea-8ed7-4280-a70a-6fb80a518447","type":"LinearScale"},{"attributes":{},"id":"f87b328d-fee3-42f5-ac4b-f3f927fbe986","type":"PanTool"},{"attributes":{},"id":"07bd6b67-abe1-4c44-a96d-c02952c8208b","type":"BasicTicker"},{"attributes":{"source":{"id":"d9f07d56-c526-4061-97b3-7ed43ac9d0a6","type":"ColumnDataSource"}},"id":"428cb3e3-7196-48f9-9da2-eb7c01a5c207","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e8838cb-deae-406e-986c-249ee371afda","type":"Oval"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d9f07d56-c526-4061-97b3-7ed43ac9d0a6","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"065dbdc5-dcd3-4f04-84d4-2f325ea0df08","type":"Title"},{"attributes":{},"id":"6eda0d05-f1ee-4ed3-b7d6-ac123a3fedd6","type":"BasicTickFormatter"}],"root_ids":["dd61f929-f99b-4e5b-b042-23a42bc16385"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"bcc5be9c-c032-4eca-950b-2fe7ea1deec8","elementid":"21350e93-d96d-4042-ac49-fda4cb128c47","modelid":"dd61f929-f99b-4e5b-b042-23a42bc16385"}];
                
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
