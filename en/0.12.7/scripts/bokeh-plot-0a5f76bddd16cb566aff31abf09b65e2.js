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
      };var element = document.getElementById("19ccb04f-24b4-421b-aecb-9369cc072d94");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '19ccb04f-24b4-421b-aecb-9369cc072d94' but no matching script tag was found. ")
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
                var docs_json = {"8566cfc8-b08b-43c9-a08a-b23c72c753d9":{"roots":{"references":[{"attributes":{"plot":{"id":"a5cb363d-947d-4c4b-adfc-c8a069345361","subtype":"Figure","type":"Plot"},"ticker":{"id":"01df6cee-b2fd-4dc8-9991-cc2e237894b5","type":"BasicTicker"}},"id":"48647987-c4e8-4d23-b3bc-b69fd672e939","type":"Grid"},{"attributes":{},"id":"86a574da-5873-467f-9b05-5653257e5b7a","type":"BasicTickFormatter"},{"attributes":{},"id":"9e10d65f-d5a1-4b4d-a56b-1a9e77d886da","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"1f25f29a-2402-4747-8d99-1f9a90773ee7","type":"BasicTickFormatter"},"plot":{"id":"62367bac-5168-4e16-8bbd-4d411a2bec1d","subtype":"Figure","type":"Plot"},"ticker":{"id":"40799bc1-cdb7-49b6-88cf-aeb2e856f746","type":"BasicTicker"}},"id":"034ca57d-c7a4-403b-a00a-9a1db92ff079","type":"LinearAxis"},{"attributes":{},"id":"79008075-3f6c-4aad-88a3-483711c55efc","type":"HelpTool"},{"attributes":{"callback":null},"id":"57719353-3446-4a7c-9dfa-543d079abdee","type":"DataRange1d"},{"attributes":{},"id":"0b406b1b-bac3-402e-a531-11d41b1f801a","type":"LinearScale"},{"attributes":{},"id":"01df6cee-b2fd-4dc8-9991-cc2e237894b5","type":"BasicTicker"},{"attributes":{"overlay":{"id":"8e9d53b2-151c-4985-9535-14e8b880d6da","type":"BoxAnnotation"}},"id":"48add755-eebf-4867-9024-3f93b5d88ce3","type":"BoxZoomTool"},{"attributes":{},"id":"5e821cba-4297-4f6d-be13-afcac7999e48","type":"HelpTool"},{"attributes":{},"id":"4d3f1766-52c7-4da6-bd69-f3226a733fbd","type":"BasicTicker"},{"attributes":{},"id":"f02a45d2-8063-418d-a08e-c14f406f8e20","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b654996b-74ca-4176-8cef-3e819b97f3a5","type":"PanTool"},{"id":"c8fbb7b6-b1a7-4bdd-80fa-c1734ab029e4","type":"WheelZoomTool"},{"id":"48add755-eebf-4867-9024-3f93b5d88ce3","type":"BoxZoomTool"},{"id":"1c30f04d-82fa-408b-ae33-2ce165e64178","type":"SaveTool"},{"id":"0495c1e3-fc33-4cb8-ae85-d1a6f9226e8a","type":"ResetTool"},{"id":"79008075-3f6c-4aad-88a3-483711c55efc","type":"HelpTool"}]},"id":"d5ee4f71-15d2-4c46-aa85-06ce5d2118df","type":"Toolbar"},{"attributes":{},"id":"b6bdaef3-e5b5-4d34-91a0-222225a96617","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ecce091-2539-4b7f-bc41-a0be0c94eac0","type":"Circle"},{"attributes":{},"id":"40799bc1-cdb7-49b6-88cf-aeb2e856f746","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8e9d53b2-151c-4985-9535-14e8b880d6da","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b6bdaef3-e5b5-4d34-91a0-222225a96617","type":"PanTool"},{"id":"9e10d65f-d5a1-4b4d-a56b-1a9e77d886da","type":"WheelZoomTool"},{"id":"8eb6992c-ad5b-400d-8503-f25b8cdbc539","type":"BoxZoomTool"},{"id":"34337e96-ac8b-4abc-a1d7-25bdac4c46ff","type":"SaveTool"},{"id":"dea47818-b57c-424b-8579-a8c2cf9c1110","type":"ResetTool"},{"id":"58fc9eb7-9843-4271-aa47-c2aa83fe6d34","type":"HelpTool"}]},"id":"8bb63e72-4940-451c-8213-6f5531ca13b6","type":"Toolbar"},{"attributes":{},"id":"0a61c3b2-5c45-4e93-b028-8088de87bc56","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d515c15d-c9e0-4db9-8b3e-f2ccba01ce6e","type":"Square"},{"attributes":{},"id":"c11018f0-fcc0-409c-aa9b-9eb6ae1ea001","type":"LinearScale"},{"attributes":{"overlay":{"id":"3ef46d1c-846a-47bb-a7fd-d3ac9974d314","type":"BoxAnnotation"}},"id":"1f6af56f-3c42-4792-a1a4-095dc20c9086","type":"BoxZoomTool"},{"attributes":{"source":{"id":"13ce4139-106f-4f32-bf81-a66bce0d1324","type":"ColumnDataSource"}},"id":"2bdba60e-3e26-4944-bf54-6535a3d27974","type":"CDSView"},{"attributes":{"overlay":{"id":"cf11c06d-5a89-4dfb-a7cc-8d8fa9634e37","type":"BoxAnnotation"}},"id":"8eb6992c-ad5b-400d-8503-f25b8cdbc539","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"62367bac-5168-4e16-8bbd-4d411a2bec1d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a61c3b2-5c45-4e93-b028-8088de87bc56","type":"BasicTicker"}},"id":"92b9357a-74ca-45bb-b393-2a657f05d744","type":"Grid"},{"attributes":{},"id":"1c30f04d-82fa-408b-ae33-2ce165e64178","type":"SaveTool"},{"attributes":{"callback":null},"id":"a46d2188-168f-499e-9e9b-a28fb19a916c","type":"DataRange1d"},{"attributes":{},"id":"c8fbb7b6-b1a7-4bdd-80fa-c1734ab029e4","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"a5cb363d-947d-4c4b-adfc-c8a069345361","subtype":"Figure","type":"Plot"},{"id":"65d76c12-fe99-437f-9a42-db038d47c3d4","subtype":"Figure","type":"Plot"},{"id":"62367bac-5168-4e16-8bbd-4d411a2bec1d","subtype":"Figure","type":"Plot"}]},"id":"23e6d6e1-3b68-4e38-8560-dee30633641f","type":"Column"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b6099fc-7d18-4a3d-ad3b-e25996558dae","type":"Square"},{"attributes":{},"id":"9e447148-957c-4213-9549-e0245a4bae76","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0565d2ae-68a2-4a49-8148-e273dd6cb528","type":"Triangle"},{"attributes":{},"id":"1f25f29a-2402-4747-8d99-1f9a90773ee7","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"1f63930a-10fe-4b77-991e-ae2bcdc16c08","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"aea5a8d0-14fa-4f40-b310-de71dfe827ad","type":"Triangle"},{"attributes":{"source":{"id":"5a5a15ca-0517-4b4c-b232-402c293361d6","type":"ColumnDataSource"}},"id":"2d98414f-c776-4bf8-bff8-691e9493cf6c","type":"CDSView"},{"attributes":{"plot":{"id":"62367bac-5168-4e16-8bbd-4d411a2bec1d","subtype":"Figure","type":"Plot"},"ticker":{"id":"40799bc1-cdb7-49b6-88cf-aeb2e856f746","type":"BasicTicker"}},"id":"82dc0672-8ffa-4a63-97a0-0b6b44df4ea4","type":"Grid"},{"attributes":{"callback":null},"id":"1366634f-34ed-424e-bab6-472e1017074f","type":"DataRange1d"},{"attributes":{},"id":"89716c2b-9eef-4b9f-a84a-0468c503bac5","type":"LinearScale"},{"attributes":{"data_source":{"id":"5a5a15ca-0517-4b4c-b232-402c293361d6","type":"ColumnDataSource"},"glyph":{"id":"6b6099fc-7d18-4a3d-ad3b-e25996558dae","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d515c15d-c9e0-4db9-8b3e-f2ccba01ce6e","type":"Square"},"selection_glyph":null,"view":{"id":"2d98414f-c776-4bf8-bff8-691e9493cf6c","type":"CDSView"}},"id":"8a1ac3d7-969b-4f86-b3c9-d9ca120331dc","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"5a5a15ca-0517-4b4c-b232-402c293361d6","type":"ColumnDataSource"},{"attributes":{},"id":"d2472df1-d325-4d2a-8eb0-5610b7c993d2","type":"LinearScale"},{"attributes":{"callback":null},"id":"4696eaf3-37a4-43c0-9c6b-9e6c14d42c20","type":"DataRange1d"},{"attributes":{},"id":"0495c1e3-fc33-4cb8-ae85-d1a6f9226e8a","type":"ResetTool"},{"attributes":{},"id":"50fd6134-df1b-49b5-bbd5-771e175f92fb","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"a5cb363d-947d-4c4b-adfc-c8a069345361","subtype":"Figure","type":"Plot"},"ticker":{"id":"10f85023-0fa6-4b95-b758-4a1bdbb6c753","type":"BasicTicker"}},"id":"15b1c289-9b2a-4780-9cd6-3a6125392a38","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6e44fd7f-b682-4a47-b7c2-f5d763e339c1","type":"PanTool"},{"id":"50fd6134-df1b-49b5-bbd5-771e175f92fb","type":"WheelZoomTool"},{"id":"1f6af56f-3c42-4792-a1a4-095dc20c9086","type":"BoxZoomTool"},{"id":"9e447148-957c-4213-9549-e0245a4bae76","type":"SaveTool"},{"id":"f02a45d2-8063-418d-a08e-c14f406f8e20","type":"ResetTool"},{"id":"5e821cba-4297-4f6d-be13-afcac7999e48","type":"HelpTool"}]},"id":"59069af4-f5e3-4cb0-a182-91929a148a2f","type":"Toolbar"},{"attributes":{},"id":"71078874-dc50-41ee-bc03-5f3ca06dc6af","type":"BasicTickFormatter"},{"attributes":{},"id":"f867dbe4-8f8c-4a13-aaf6-20ee5e0c5440","type":"LinearScale"},{"attributes":{"source":{"id":"6f3cf64c-ddef-4097-b6d1-0a92931de360","type":"ColumnDataSource"}},"id":"19805fe9-bab9-4e68-8dc2-07e36b8d5b74","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3ef46d1c-846a-47bb-a7fd-d3ac9974d314","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"5f1d4b3b-5d58-453c-8c9e-8d572671ce02","type":"BasicTickFormatter"},"plot":{"id":"62367bac-5168-4e16-8bbd-4d411a2bec1d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a61c3b2-5c45-4e93-b028-8088de87bc56","type":"BasicTicker"}},"id":"9d56cbff-f7e9-4cc1-9afb-97c1c9bb4c7a","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"13ce4139-106f-4f32-bf81-a66bce0d1324","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"226d5c25-1869-4c51-902d-3f860f3d4a19","type":"LinearAxis"}],"left":[{"id":"c8b93eef-cc53-416d-8077-d7a7c5359ace","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"226d5c25-1869-4c51-902d-3f860f3d4a19","type":"LinearAxis"},{"id":"5d36f6bb-091e-4bdb-9db8-3c6121fe9d5a","type":"Grid"},{"id":"c8b93eef-cc53-416d-8077-d7a7c5359ace","type":"LinearAxis"},{"id":"0b404e90-5723-4405-a79f-0c968261e9f4","type":"Grid"},{"id":"3ef46d1c-846a-47bb-a7fd-d3ac9974d314","type":"BoxAnnotation"},{"id":"6b06d11e-618f-4d3b-b3ea-be5ec3b6e82d","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"59069af4-f5e3-4cb0-a182-91929a148a2f","type":"Toolbar"},"x_range":{"id":"93d3923f-a6a7-40a8-a034-3c2c7a93cd45","type":"DataRange1d"},"x_scale":{"id":"89716c2b-9eef-4b9f-a84a-0468c503bac5","type":"LinearScale"},"y_range":{"id":"57719353-3446-4a7c-9dfa-543d079abdee","type":"DataRange1d"},"y_scale":{"id":"c11018f0-fcc0-409c-aa9b-9eb6ae1ea001","type":"LinearScale"}},"id":"65d76c12-fe99-437f-9a42-db038d47c3d4","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"15638586-1403-4dc8-a636-73f77885e406","type":"LinearAxis"}],"left":[{"id":"2ed19eb9-c4fd-4d2c-a6c7-3a7e918c3bae","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"15638586-1403-4dc8-a636-73f77885e406","type":"LinearAxis"},{"id":"48647987-c4e8-4d23-b3bc-b69fd672e939","type":"Grid"},{"id":"2ed19eb9-c4fd-4d2c-a6c7-3a7e918c3bae","type":"LinearAxis"},{"id":"15b1c289-9b2a-4780-9cd6-3a6125392a38","type":"Grid"},{"id":"8e9d53b2-151c-4985-9535-14e8b880d6da","type":"BoxAnnotation"},{"id":"1c8a09b1-27f0-40fb-893e-3a8df0e4fbe1","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"d5ee4f71-15d2-4c46-aa85-06ce5d2118df","type":"Toolbar"},"x_range":{"id":"1366634f-34ed-424e-bab6-472e1017074f","type":"DataRange1d"},"x_scale":{"id":"d5a7802c-c98d-4cc9-85b8-726fca011ed6","type":"LinearScale"},"y_range":{"id":"1f63930a-10fe-4b77-991e-ae2bcdc16c08","type":"DataRange1d"},"y_scale":{"id":"d2472df1-d325-4d2a-8eb0-5610b7c993d2","type":"LinearScale"}},"id":"a5cb363d-947d-4c4b-adfc-c8a069345361","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6e44fd7f-b682-4a47-b7c2-f5d763e339c1","type":"PanTool"},{"attributes":{"formatter":{"id":"0007018e-5b39-4ff9-b868-86ed3da02266","type":"BasicTickFormatter"},"plot":{"id":"a5cb363d-947d-4c4b-adfc-c8a069345361","subtype":"Figure","type":"Plot"},"ticker":{"id":"01df6cee-b2fd-4dc8-9991-cc2e237894b5","type":"BasicTicker"}},"id":"15638586-1403-4dc8-a636-73f77885e406","type":"LinearAxis"},{"attributes":{"data_source":{"id":"6f3cf64c-ddef-4097-b6d1-0a92931de360","type":"ColumnDataSource"},"glyph":{"id":"aea5a8d0-14fa-4f40-b310-de71dfe827ad","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0565d2ae-68a2-4a49-8148-e273dd6cb528","type":"Triangle"},"selection_glyph":null,"view":{"id":"19805fe9-bab9-4e68-8dc2-07e36b8d5b74","type":"CDSView"}},"id":"6b06d11e-618f-4d3b-b3ea-be5ec3b6e82d","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"65d76c12-fe99-437f-9a42-db038d47c3d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b1c0e79-80cd-42ad-b769-5e8eca3d8ea3","type":"BasicTicker"}},"id":"0b404e90-5723-4405-a79f-0c968261e9f4","type":"Grid"},{"attributes":{"formatter":{"id":"5411c45f-eda7-4ccf-b9bd-e78fa22d0852","type":"BasicTickFormatter"},"plot":{"id":"a5cb363d-947d-4c4b-adfc-c8a069345361","subtype":"Figure","type":"Plot"},"ticker":{"id":"10f85023-0fa6-4b95-b758-4a1bdbb6c753","type":"BasicTicker"}},"id":"2ed19eb9-c4fd-4d2c-a6c7-3a7e918c3bae","type":"LinearAxis"},{"attributes":{},"id":"b654996b-74ca-4176-8cef-3e819b97f3a5","type":"PanTool"},{"attributes":{},"id":"d5a7802c-c98d-4cc9-85b8-726fca011ed6","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"96d963fb-4e7b-4c83-86d3-e2d9d17377ee","type":"Circle"},{"attributes":{"callback":null},"id":"93d3923f-a6a7-40a8-a034-3c2c7a93cd45","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cf11c06d-5a89-4dfb-a7cc-8d8fa9634e37","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"65d76c12-fe99-437f-9a42-db038d47c3d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d3f1766-52c7-4da6-bd69-f3226a733fbd","type":"BasicTicker"}},"id":"5d36f6bb-091e-4bdb-9db8-3c6121fe9d5a","type":"Grid"},{"attributes":{"below":[{"id":"034ca57d-c7a4-403b-a00a-9a1db92ff079","type":"LinearAxis"}],"left":[{"id":"9d56cbff-f7e9-4cc1-9afb-97c1c9bb4c7a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"034ca57d-c7a4-403b-a00a-9a1db92ff079","type":"LinearAxis"},{"id":"82dc0672-8ffa-4a63-97a0-0b6b44df4ea4","type":"Grid"},{"id":"9d56cbff-f7e9-4cc1-9afb-97c1c9bb4c7a","type":"LinearAxis"},{"id":"92b9357a-74ca-45bb-b393-2a657f05d744","type":"Grid"},{"id":"cf11c06d-5a89-4dfb-a7cc-8d8fa9634e37","type":"BoxAnnotation"},{"id":"8a1ac3d7-969b-4f86-b3c9-d9ca120331dc","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8bb63e72-4940-451c-8213-6f5531ca13b6","type":"Toolbar"},"x_range":{"id":"4696eaf3-37a4-43c0-9c6b-9e6c14d42c20","type":"DataRange1d"},"x_scale":{"id":"f867dbe4-8f8c-4a13-aaf6-20ee5e0c5440","type":"LinearScale"},"y_range":{"id":"a46d2188-168f-499e-9e9b-a28fb19a916c","type":"DataRange1d"},"y_scale":{"id":"0b406b1b-bac3-402e-a531-11d41b1f801a","type":"LinearScale"}},"id":"62367bac-5168-4e16-8bbd-4d411a2bec1d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10f85023-0fa6-4b95-b758-4a1bdbb6c753","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"6f3cf64c-ddef-4097-b6d1-0a92931de360","type":"ColumnDataSource"},{"attributes":{},"id":"6b1c0e79-80cd-42ad-b769-5e8eca3d8ea3","type":"BasicTicker"},{"attributes":{},"id":"5411c45f-eda7-4ccf-b9bd-e78fa22d0852","type":"BasicTickFormatter"},{"attributes":{},"id":"0007018e-5b39-4ff9-b868-86ed3da02266","type":"BasicTickFormatter"},{"attributes":{},"id":"dea47818-b57c-424b-8579-a8c2cf9c1110","type":"ResetTool"},{"attributes":{},"id":"5f1d4b3b-5d58-453c-8c9e-8d572671ce02","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"71078874-dc50-41ee-bc03-5f3ca06dc6af","type":"BasicTickFormatter"},"plot":{"id":"65d76c12-fe99-437f-9a42-db038d47c3d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d3f1766-52c7-4da6-bd69-f3226a733fbd","type":"BasicTicker"}},"id":"226d5c25-1869-4c51-902d-3f860f3d4a19","type":"LinearAxis"},{"attributes":{},"id":"34337e96-ac8b-4abc-a1d7-25bdac4c46ff","type":"SaveTool"},{"attributes":{"data_source":{"id":"13ce4139-106f-4f32-bf81-a66bce0d1324","type":"ColumnDataSource"},"glyph":{"id":"1ecce091-2539-4b7f-bc41-a0be0c94eac0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96d963fb-4e7b-4c83-86d3-e2d9d17377ee","type":"Circle"},"selection_glyph":null,"view":{"id":"2bdba60e-3e26-4944-bf54-6535a3d27974","type":"CDSView"}},"id":"1c8a09b1-27f0-40fb-893e-3a8df0e4fbe1","type":"GlyphRenderer"},{"attributes":{},"id":"58fc9eb7-9843-4271-aa47-c2aa83fe6d34","type":"HelpTool"},{"attributes":{"formatter":{"id":"86a574da-5873-467f-9b05-5653257e5b7a","type":"BasicTickFormatter"},"plot":{"id":"65d76c12-fe99-437f-9a42-db038d47c3d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b1c0e79-80cd-42ad-b769-5e8eca3d8ea3","type":"BasicTicker"}},"id":"c8b93eef-cc53-416d-8077-d7a7c5359ace","type":"LinearAxis"}],"root_ids":["23e6d6e1-3b68-4e38-8560-dee30633641f"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"8566cfc8-b08b-43c9-a08a-b23c72c753d9","elementid":"19ccb04f-24b4-421b-aecb-9369cc072d94","modelid":"23e6d6e1-3b68-4e38-8560-dee30633641f"}];
                
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
