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
      };var element = document.getElementById("cc51bf0a-ed92-4a0b-aa33-3a9812a79aea");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cc51bf0a-ed92-4a0b-aa33-3a9812a79aea' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"e8c567b4-b0eb-4230-8b1b-8f1e1b17ea96":{"roots":{"references":[{"attributes":{"formatter":{"id":"b8e63cb4-cdbf-4810-8ae2-a29d1842fe26","type":"BasicTickFormatter"},"plot":{"id":"8c039646-a972-4fcd-a159-4a0dd45661f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"96e1998a-1ac6-4152-b85d-d91f68beacba","type":"BasicTicker"}},"id":"553ce269-1ed2-4000-97f0-ea26ea9432c9","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2259477f-0d83-41cd-9f4d-61fd3cc34e6d","type":"DataRange1d"},{"attributes":{},"id":"01303a3c-5a74-4fd3-b0ac-b7e997410050","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"c15ab83c-7225-4702-9c47-61254b3feb55","type":"BoxAnnotation"},"renderers":[{"id":"6a8f213a-f680-4db4-bb5d-89aa870ec310","type":"GlyphRenderer"}]},"id":"7e3ea525-7a37-49e1-a115-f215fafcb167","type":"BoxSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5beb98dd-676a-442c-b835-0f6a33198a1e","type":"Circle"},{"attributes":{},"id":"027111dd-f37a-46fb-9e7b-b474c519ad2c","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7e3ea525-7a37-49e1-a115-f215fafcb167","type":"BoxSelectTool"},{"id":"10795d35-9eb7-4708-9a3d-c0549d44f515","type":"HoverTool"},{"id":"0b8f6623-06fe-493f-818a-797ee3deb637","type":"ResetTool"}]},"id":"c1071bb5-afd0-4516-91a7-b6cf38427890","type":"Toolbar"},{"attributes":{},"id":"f49f5ec6-ad41-4508-bdab-84c0e5bf14cd","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e258868a-118a-4267-8035-18f6144b2cb5","type":"BasicTickFormatter"},"plot":{"id":"6a6c9e53-1194-4db2-bc72-ed565c0b5db6","subtype":"Figure","type":"Plot"},"ticker":{"id":"44903dc7-850c-4f4e-93a2-c372a799ac5e","type":"BasicTicker"}},"id":"b22fcf5a-ea83-40eb-9070-a4fb699739cc","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"02e06fd6-4b9b-4ed1-b85a-c11c4f36e5c8","type":"Title"},{"attributes":{},"id":"96e1998a-1ac6-4152-b85d-d91f68beacba","type":"BasicTicker"},{"attributes":{},"id":"44903dc7-850c-4f4e-93a2-c372a799ac5e","type":"BasicTicker"},{"attributes":{"below":[{"id":"b22fcf5a-ea83-40eb-9070-a4fb699739cc","type":"LinearAxis"}],"left":[{"id":"38351d71-5d0e-4be0-bc01-6d61467c1f99","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b22fcf5a-ea83-40eb-9070-a4fb699739cc","type":"LinearAxis"},{"id":"e961486c-0b19-4cc8-8fdc-fad686d6a868","type":"Grid"},{"id":"38351d71-5d0e-4be0-bc01-6d61467c1f99","type":"LinearAxis"},{"id":"47361a6d-b447-418f-932d-8974e8daa9d4","type":"Grid"},{"id":"7912f342-aa69-47cd-a02f-c7ffb09a41ee","type":"BoxAnnotation"},{"id":"fe9ab795-3b42-47bc-890a-0c44aec19139","type":"GlyphRenderer"}],"title":{"id":"0c88a47e-c3a3-490f-8639-44123d294c74","type":"Title"},"toolbar":{"id":"d00d1a6e-0513-4449-9180-d2504ea7536b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a49dc02d-828c-49f0-b387-4b9997e8923d","type":"DataRange1d"},"x_scale":{"id":"81f75c64-85eb-4825-b05b-eef7fd64e1fe","type":"LinearScale"},"y_range":{"id":"2259477f-0d83-41cd-9f4d-61fd3cc34e6d","type":"DataRange1d"},"y_scale":{"id":"54c9953a-5cf1-4481-9bdf-3c2de1e476bf","type":"LinearScale"}},"id":"6a6c9e53-1194-4db2-bc72-ed565c0b5db6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b8e63cb4-cdbf-4810-8ae2-a29d1842fe26","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"8c039646-a972-4fcd-a159-4a0dd45661f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"96e1998a-1ac6-4152-b85d-d91f68beacba","type":"BasicTicker"}},"id":"5f4d8d2a-0f2b-405f-b1c6-036822aa9d71","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c15ab83c-7225-4702-9c47-61254b3feb55","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a7697cc-c7a2-4a0c-af6e-09f7cebbd0b4","type":"Circle"},{"attributes":{"formatter":{"id":"3685a8d3-15ab-4ee4-857d-71a8e24331c9","type":"BasicTickFormatter"},"plot":{"id":"8c039646-a972-4fcd-a159-4a0dd45661f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"92bde7fc-e6ce-4816-aad4-f522f3e42acd","type":"BasicTicker"}},"id":"154627d2-d145-4cf0-9511-46c87d137f06","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]}},"id":"e52ce57b-bdfa-4d0d-ba42-838fa859da47","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"6a6c9e53-1194-4db2-bc72-ed565c0b5db6","subtype":"Figure","type":"Plot"},"ticker":{"id":"01303a3c-5a74-4fd3-b0ac-b7e997410050","type":"BasicTicker"}},"id":"47361a6d-b447-418f-932d-8974e8daa9d4","type":"Grid"},{"attributes":{"callback":null},"id":"10795d35-9eb7-4708-9a3d-c0549d44f515","type":"HoverTool"},{"attributes":{"below":[{"id":"154627d2-d145-4cf0-9511-46c87d137f06","type":"LinearAxis"}],"left":[{"id":"553ce269-1ed2-4000-97f0-ea26ea9432c9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"154627d2-d145-4cf0-9511-46c87d137f06","type":"LinearAxis"},{"id":"ba888921-a8cf-4a67-a2d7-54d59ddc0e2b","type":"Grid"},{"id":"553ce269-1ed2-4000-97f0-ea26ea9432c9","type":"LinearAxis"},{"id":"5f4d8d2a-0f2b-405f-b1c6-036822aa9d71","type":"Grid"},{"id":"c15ab83c-7225-4702-9c47-61254b3feb55","type":"BoxAnnotation"},{"id":"6a8f213a-f680-4db4-bb5d-89aa870ec310","type":"GlyphRenderer"}],"title":{"id":"02e06fd6-4b9b-4ed1-b85a-c11c4f36e5c8","type":"Title"},"toolbar":{"id":"c1071bb5-afd0-4516-91a7-b6cf38427890","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a49dc02d-828c-49f0-b387-4b9997e8923d","type":"DataRange1d"},"x_scale":{"id":"542d8178-5277-44a1-b1e9-46a8e2b258b9","type":"LinearScale"},"y_range":{"id":"2259477f-0d83-41cd-9f4d-61fd3cc34e6d","type":"DataRange1d"},"y_scale":{"id":"027111dd-f37a-46fb-9e7b-b474c519ad2c","type":"LinearScale"}},"id":"8c039646-a972-4fcd-a159-4a0dd45661f1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"81f75c64-85eb-4825-b05b-eef7fd64e1fe","type":"LinearScale"},{"attributes":{},"id":"22392dc4-4f87-4131-b6d8-581dacd9aed2","type":"ResetTool"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"9488bb02-edce-4b3f-8f3d-46b2c5e87215","type":"BooleanFilter"},{"attributes":{"children":[{"id":"3c50ba14-3efb-4f57-be9a-c5567d1af7cd","type":"Row"}]},"id":"b11a85b2-fa0a-499b-ac32-f887a64a56e9","type":"Column"},{"attributes":{"plot":{"id":"6a6c9e53-1194-4db2-bc72-ed565c0b5db6","subtype":"Figure","type":"Plot"},"ticker":{"id":"44903dc7-850c-4f4e-93a2-c372a799ac5e","type":"BasicTicker"}},"id":"e961486c-0b19-4cc8-8fdc-fad686d6a868","type":"Grid"},{"attributes":{},"id":"92bde7fc-e6ce-4816-aad4-f522f3e42acd","type":"BasicTicker"},{"attributes":{},"id":"0b8f6623-06fe-493f-818a-797ee3deb637","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c0a1e0e6-46f6-433a-af94-6eb950473139","type":"BoxSelectTool"},{"id":"2a530744-9e19-4685-ac57-4c38e61357b9","type":"HoverTool"},{"id":"22392dc4-4f87-4131-b6d8-581dacd9aed2","type":"ResetTool"}]},"id":"d00d1a6e-0513-4449-9180-d2504ea7536b","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"159590b6-99f5-4a64-a9cc-2e6b81572fa6","type":"Circle"},{"attributes":{},"id":"3685a8d3-15ab-4ee4-857d-71a8e24331c9","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7912f342-aa69-47cd-a02f-c7ffb09a41ee","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"5c857a20-7daf-4ede-a59d-77611fbd847a","type":"ToolbarBox"},{"id":"b11a85b2-fa0a-499b-ac32-f887a64a56e9","type":"Column"}]},"id":"84e7f5b3-55c3-4a06-aada-9041331948d9","type":"Column"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc9c3927-ab18-49a5-9d07-48df3e3c5812","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"0c88a47e-c3a3-490f-8639-44123d294c74","type":"Title"},{"attributes":{"formatter":{"id":"f49f5ec6-ad41-4508-bdab-84c0e5bf14cd","type":"BasicTickFormatter"},"plot":{"id":"6a6c9e53-1194-4db2-bc72-ed565c0b5db6","subtype":"Figure","type":"Plot"},"ticker":{"id":"01303a3c-5a74-4fd3-b0ac-b7e997410050","type":"BasicTicker"}},"id":"38351d71-5d0e-4be0-bc01-6d61467c1f99","type":"LinearAxis"},{"attributes":{},"id":"e258868a-118a-4267-8035-18f6144b2cb5","type":"BasicTickFormatter"},{"attributes":{},"id":"54c9953a-5cf1-4481-9bdf-3c2de1e476bf","type":"LinearScale"},{"attributes":{"source":{"id":"e52ce57b-bdfa-4d0d-ba42-838fa859da47","type":"ColumnDataSource"}},"id":"e45fcc22-43c8-4d63-aed5-dae2c50c9317","type":"CDSView"},{"attributes":{},"id":"542d8178-5277-44a1-b1e9-46a8e2b258b9","type":"LinearScale"},{"attributes":{"filters":[{"id":"9488bb02-edce-4b3f-8f3d-46b2c5e87215","type":"BooleanFilter"}],"source":{"id":"e52ce57b-bdfa-4d0d-ba42-838fa859da47","type":"ColumnDataSource"}},"id":"04b3a89d-ed9e-47dc-9800-7fe9eb15d729","type":"CDSView"},{"attributes":{"data_source":{"id":"e52ce57b-bdfa-4d0d-ba42-838fa859da47","type":"ColumnDataSource"},"glyph":{"id":"159590b6-99f5-4a64-a9cc-2e6b81572fa6","type":"Circle"},"hover_glyph":{"id":"0a7697cc-c7a2-4a0c-af6e-09f7cebbd0b4","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"65a49d92-604d-4fcc-8d58-21f11eac7f88","type":"Circle"},"selection_glyph":null,"view":{"id":"04b3a89d-ed9e-47dc-9800-7fe9eb15d729","type":"CDSView"}},"id":"fe9ab795-3b42-47bc-890a-0c44aec19139","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8c039646-a972-4fcd-a159-4a0dd45661f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"92bde7fc-e6ce-4816-aad4-f522f3e42acd","type":"BasicTicker"}},"id":"ba888921-a8cf-4a67-a2d7-54d59ddc0e2b","type":"Grid"},{"attributes":{"children":[{"id":"8c039646-a972-4fcd-a159-4a0dd45661f1","subtype":"Figure","type":"Plot"},{"id":"6a6c9e53-1194-4db2-bc72-ed565c0b5db6","subtype":"Figure","type":"Plot"}]},"id":"3c50ba14-3efb-4f57-be9a-c5567d1af7cd","type":"Row"},{"attributes":{"callback":null,"overlay":{"id":"7912f342-aa69-47cd-a02f-c7ffb09a41ee","type":"BoxAnnotation"},"renderers":[{"id":"fe9ab795-3b42-47bc-890a-0c44aec19139","type":"GlyphRenderer"}]},"id":"c0a1e0e6-46f6-433a-af94-6eb950473139","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"e52ce57b-bdfa-4d0d-ba42-838fa859da47","type":"ColumnDataSource"},"glyph":{"id":"fc9c3927-ab18-49a5-9d07-48df3e3c5812","type":"Circle"},"hover_glyph":{"id":"95634dc4-1e9e-4477-99d1-8c642142a25a","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"5beb98dd-676a-442c-b835-0f6a33198a1e","type":"Circle"},"selection_glyph":null,"view":{"id":"e45fcc22-43c8-4d63-aed5-dae2c50c9317","type":"CDSView"}},"id":"6a8f213a-f680-4db4-bb5d-89aa870ec310","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"95634dc4-1e9e-4477-99d1-8c642142a25a","type":"Circle"},{"attributes":{"callback":null},"id":"2a530744-9e19-4685-ac57-4c38e61357b9","type":"HoverTool"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"7e3ea525-7a37-49e1-a115-f215fafcb167","type":"BoxSelectTool"},{"id":"10795d35-9eb7-4708-9a3d-c0549d44f515","type":"HoverTool"},{"id":"0b8f6623-06fe-493f-818a-797ee3deb637","type":"ResetTool"},{"id":"c0a1e0e6-46f6-433a-af94-6eb950473139","type":"BoxSelectTool"},{"id":"2a530744-9e19-4685-ac57-4c38e61357b9","type":"HoverTool"},{"id":"22392dc4-4f87-4131-b6d8-581dacd9aed2","type":"ResetTool"}]},"id":"5c857a20-7daf-4ede-a59d-77611fbd847a","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"a49dc02d-828c-49f0-b387-4b9997e8923d","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"65a49d92-604d-4fcc-8d58-21f11eac7f88","type":"Circle"}],"root_ids":["84e7f5b3-55c3-4a06-aada-9041331948d9"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e8c567b4-b0eb-4230-8b1b-8f1e1b17ea96","elementid":"cc51bf0a-ed92-4a0b-aa33-3a9812a79aea","modelid":"84e7f5b3-55c3-4a06-aada-9041331948d9"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
