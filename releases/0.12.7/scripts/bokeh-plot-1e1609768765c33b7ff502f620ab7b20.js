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
      };var element = document.getElementById("9c3db4ac-6302-43cd-8b1a-ed01f41466a7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9c3db4ac-6302-43cd-8b1a-ed01f41466a7' but no matching script tag was found. ")
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
                var docs_json = {"2be9a74c-4629-41fc-ac24-3c7b8a897379":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0c6e97f7-fb36-4eb7-9207-f505cbde9439","type":"PanTool"},{"id":"d6d845ac-2913-4c7a-92a6-fbaa7eeaf7f2","type":"ResetTool"},{"id":"188a7649-9f87-4c4a-af30-2eeff706d66f","type":"SaveTool"}]},"id":"48a00ad8-92e4-411f-86ff-451dcdfa3fe4","type":"Toolbar"},{"attributes":{"below":[{"id":"8834dbb2-42a7-4936-97ef-f053cfe2352e","type":"LinearAxis"}],"left":[{"id":"a6330150-5d8e-4fb5-bde8-87885eccd87f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8834dbb2-42a7-4936-97ef-f053cfe2352e","type":"LinearAxis"},{"id":"e3b85ed5-e06c-4bdf-92ee-1003f0e5bdcf","type":"Grid"},{"id":"a6330150-5d8e-4fb5-bde8-87885eccd87f","type":"LinearAxis"},{"id":"0175305f-49c7-4a2e-a219-4ff110093f40","type":"Grid"},{"id":"3a320566-b892-4785-8077-190a437ef296","type":"GlyphRenderer"}],"title":{"id":"5b817c9e-d611-43b1-960d-f337dbee9c94","type":"Title"},"toolbar":{"id":"48a00ad8-92e4-411f-86ff-451dcdfa3fe4","type":"Toolbar"},"x_range":{"id":"e1113f3d-eb02-4db4-a779-a9d988f0b936","type":"DataRange1d"},"x_scale":{"id":"fb6449a5-e0a8-4010-b657-9407e7daaff8","type":"LinearScale"},"y_range":{"id":"15e690c2-ff1e-4524-892e-42e84998691d","type":"DataRange1d"},"y_scale":{"id":"fb1ac092-b632-47f2-a990-3d7bd87c2aef","type":"LinearScale"}},"id":"eddc1166-fdcd-4fd3-94f7-a5f298afedb4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"fb1ac092-b632-47f2-a990-3d7bd87c2aef","type":"LinearScale"},{"attributes":{},"id":"5f5ff95f-9549-46e0-a836-575ac57fbb37","type":"BasicTicker"},{"attributes":{"callback":null},"id":"e1113f3d-eb02-4db4-a779-a9d988f0b936","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]}},"id":"c64e46b8-762b-48a0-a23e-3cdc7de30acb","type":"ColumnDataSource"},{"attributes":{},"id":"62474ecc-0cce-4a8f-9412-4daab2e30466","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e125562-31f6-4a34-9e40-663df6098e1f","type":"Circle"},{"attributes":{"source":{"id":"c64e46b8-762b-48a0-a23e-3cdc7de30acb","type":"ColumnDataSource"}},"id":"0d54df10-2dd5-4449-a70e-ce78511c7030","type":"CDSView"},{"attributes":{"formatter":{"id":"b43f1676-2bf5-4e92-b4b2-0a43943aa2eb","type":"BasicTickFormatter"},"plot":{"id":"eddc1166-fdcd-4fd3-94f7-a5f298afedb4","subtype":"Figure","type":"Plot"},"ticker":{"id":"62474ecc-0cce-4a8f-9412-4daab2e30466","type":"BasicTicker"}},"id":"a6330150-5d8e-4fb5-bde8-87885eccd87f","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c64e46b8-762b-48a0-a23e-3cdc7de30acb","type":"ColumnDataSource"},"glyph":{"id":"00d8db3e-2572-4861-ac2e-3c12ddaf9672","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7e125562-31f6-4a34-9e40-663df6098e1f","type":"Circle"},"selection_glyph":null,"view":{"id":"0d54df10-2dd5-4449-a70e-ce78511c7030","type":"CDSView"}},"id":"3a320566-b892-4785-8077-190a437ef296","type":"GlyphRenderer"},{"attributes":{},"id":"d6d845ac-2913-4c7a-92a6-fbaa7eeaf7f2","type":"ResetTool"},{"attributes":{},"id":"188a7649-9f87-4c4a-af30-2eeff706d66f","type":"SaveTool"},{"attributes":{"plot":{"id":"eddc1166-fdcd-4fd3-94f7-a5f298afedb4","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f5ff95f-9549-46e0-a836-575ac57fbb37","type":"BasicTicker"}},"id":"e3b85ed5-e06c-4bdf-92ee-1003f0e5bdcf","type":"Grid"},{"attributes":{"formatter":{"id":"35482543-361e-478b-a559-e178b33effae","type":"BasicTickFormatter"},"plot":{"id":"eddc1166-fdcd-4fd3-94f7-a5f298afedb4","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f5ff95f-9549-46e0-a836-575ac57fbb37","type":"BasicTicker"}},"id":"8834dbb2-42a7-4936-97ef-f053cfe2352e","type":"LinearAxis"},{"attributes":{},"id":"fb6449a5-e0a8-4010-b657-9407e7daaff8","type":"LinearScale"},{"attributes":{"callback":null},"id":"15e690c2-ff1e-4524-892e-42e84998691d","type":"DataRange1d"},{"attributes":{},"id":"b43f1676-2bf5-4e92-b4b2-0a43943aa2eb","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"00d8db3e-2572-4861-ac2e-3c12ddaf9672","type":"Circle"},{"attributes":{},"id":"0c6e97f7-fb36-4eb7-9207-f505cbde9439","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"eddc1166-fdcd-4fd3-94f7-a5f298afedb4","subtype":"Figure","type":"Plot"},"ticker":{"id":"62474ecc-0cce-4a8f-9412-4daab2e30466","type":"BasicTicker"}},"id":"0175305f-49c7-4a2e-a219-4ff110093f40","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"5b817c9e-d611-43b1-960d-f337dbee9c94","type":"Title"},{"attributes":{},"id":"35482543-361e-478b-a559-e178b33effae","type":"BasicTickFormatter"}],"root_ids":["eddc1166-fdcd-4fd3-94f7-a5f298afedb4"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"2be9a74c-4629-41fc-ac24-3c7b8a897379","elementid":"9c3db4ac-6302-43cd-8b1a-ed01f41466a7","modelid":"eddc1166-fdcd-4fd3-94f7-a5f298afedb4"}];
                
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
