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
      };var element = document.getElementById("db1f113e-469e-4d37-917e-52b8c3977ec3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'db1f113e-469e-4d37-917e-52b8c3977ec3' but no matching script tag was found. ")
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
                var docs_json = {"b2730b94-91a4-4928-97d1-c578d875027a":{"roots":{"references":[{"attributes":{"formatter":{"id":"ec35faa6-4a5b-4060-bbd1-85fc2ec9224f","type":"BasicTickFormatter"},"plot":{"id":"9a1a2048-8358-44cd-8db7-3fbf3acf6ea4","subtype":"Figure","type":"Plot"},"ticker":{"id":"d33bf585-dbed-4eb0-ac56-b6a6adee7722","type":"BasicTicker"}},"id":"8619fcdb-c722-4140-927d-c772ece0431e","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5ed7cb7e-4835-4f7a-8ad2-3db4a20a5264","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b7ab473e-583d-41e2-b36c-dee209692bc9","type":"BoxAnnotation"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"6ba2fab3-b303-42fe-9e40-0f73f85d2432","type":"BoxSelectTool"},{"id":"af84b304-b24e-4894-8985-fbf314b776c0","type":"HoverTool"},{"id":"8c587282-93ed-4a9f-8f95-a22f00adecd3","type":"ResetTool"},{"id":"f1f227dd-0a3b-4c4a-bc1d-5264ab2c850a","type":"BoxSelectTool"},{"id":"928861d4-6fba-4572-adb6-d2259e15025d","type":"HoverTool"},{"id":"03c5803b-8290-4015-a6e9-872726eef35f","type":"ResetTool"}]},"id":"bab83287-80f9-40d7-9fd5-a8d40f9840d6","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"af84b304-b24e-4894-8985-fbf314b776c0","type":"HoverTool"},{"attributes":{},"id":"e4d4ee6d-3ba1-4381-8fe8-ca436b690229","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]}},"id":"c1546c24-feed-416d-bebf-63507731e71a","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"79ab618a-823b-460e-bd78-a00b7fb7b82e","type":"Circle"},{"attributes":{"callback":null},"id":"928861d4-6fba-4572-adb6-d2259e15025d","type":"HoverTool"},{"attributes":{"data_source":{"id":"c1546c24-feed-416d-bebf-63507731e71a","type":"ColumnDataSource"},"glyph":{"id":"7ee23435-158a-404f-a5af-70a3a02e14f3","type":"Circle"},"hover_glyph":{"id":"aa72ad2f-97c5-4a3c-bcab-4cdad3dbd35b","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"79ab618a-823b-460e-bd78-a00b7fb7b82e","type":"Circle"},"selection_glyph":null,"view":{"id":"5578cb6b-2036-4303-acf2-13cebffa9bd4","type":"CDSView"}},"id":"f9ed1812-3698-4348-9330-5d3f849b321d","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"5502dc06-bea2-4175-a5d1-c71f85179ccd","type":"DataRange1d"},{"attributes":{"filters":[{"id":"095b4293-c3b8-4238-9d57-fda1b5ee0ecc","type":"BooleanFilter"}],"source":{"id":"c1546c24-feed-416d-bebf-63507731e71a","type":"ColumnDataSource"}},"id":"5578cb6b-2036-4303-acf2-13cebffa9bd4","type":"CDSView"},{"attributes":{"formatter":{"id":"aff57690-2792-4861-b9d2-a571ccf0268a","type":"BasicTickFormatter"},"plot":{"id":"448ec8db-0819-4754-8b8a-f0fea4baa1c5","subtype":"Figure","type":"Plot"},"ticker":{"id":"b46144a2-6c82-4122-add7-5497e51a5e4a","type":"BasicTicker"}},"id":"fc07610e-309d-436d-8ad7-d686c8e8a65e","type":"LinearAxis"},{"attributes":{},"id":"03c5803b-8290-4015-a6e9-872726eef35f","type":"ResetTool"},{"attributes":{"source":{"id":"c1546c24-feed-416d-bebf-63507731e71a","type":"ColumnDataSource"}},"id":"8a5cc8c1-8c97-405a-8f1b-eb7e6de2cca9","type":"CDSView"},{"attributes":{},"id":"d33bf585-dbed-4eb0-ac56-b6a6adee7722","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ee23435-158a-404f-a5af-70a3a02e14f3","type":"Circle"},{"attributes":{"below":[{"id":"8619fcdb-c722-4140-927d-c772ece0431e","type":"LinearAxis"}],"left":[{"id":"f92f4a13-4762-41d0-a07d-3f130b29a94d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8619fcdb-c722-4140-927d-c772ece0431e","type":"LinearAxis"},{"id":"12be6ef3-0dd2-4cdd-aaaf-f1c28f71737e","type":"Grid"},{"id":"f92f4a13-4762-41d0-a07d-3f130b29a94d","type":"LinearAxis"},{"id":"cdd5f16f-6d52-4401-af0b-61f6caf1135d","type":"Grid"},{"id":"b7ab473e-583d-41e2-b36c-dee209692bc9","type":"BoxAnnotation"},{"id":"f9ed1812-3698-4348-9330-5d3f849b321d","type":"GlyphRenderer"}],"title":{"id":"4fbc7287-51dc-4458-9c92-59353038c0d1","type":"Title"},"toolbar":{"id":"5fad1350-9fd0-4d0b-8274-ee55ff7a6d64","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9352d5e7-45c4-4a9f-b626-8f5ad5130655","type":"DataRange1d"},"x_scale":{"id":"be236adc-7f51-4ec9-960a-d1ec29f95218","type":"LinearScale"},"y_range":{"id":"5502dc06-bea2-4175-a5d1-c71f85179ccd","type":"DataRange1d"},"y_scale":{"id":"2c520fca-6697-4598-b9fa-e8779f41f87b","type":"LinearScale"}},"id":"9a1a2048-8358-44cd-8db7-3fbf3acf6ea4","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"7376c70d-c69b-4b8b-8e28-fb4520539319","type":"BasicTickFormatter"},"plot":{"id":"448ec8db-0819-4754-8b8a-f0fea4baa1c5","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b14eba7-73d5-4c43-b585-984fcdcde881","type":"BasicTicker"}},"id":"1dd6590d-ae5f-4bd5-b607-555128a8aea0","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"375b9dd8-3240-4b5c-8e73-a63dbdb0d5c8","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"448ec8db-0819-4754-8b8a-f0fea4baa1c5","subtype":"Figure","type":"Plot"},"ticker":{"id":"b46144a2-6c82-4122-add7-5497e51a5e4a","type":"BasicTicker"}},"id":"1e54d999-fed6-4e24-8477-8f6b272a1fbf","type":"Grid"},{"attributes":{"booleans":[false,false,true,true,true]},"id":"095b4293-c3b8-4238-9d57-fda1b5ee0ecc","type":"BooleanFilter"},{"attributes":{"children":[{"id":"448ec8db-0819-4754-8b8a-f0fea4baa1c5","subtype":"Figure","type":"Plot"},{"id":"9a1a2048-8358-44cd-8db7-3fbf3acf6ea4","subtype":"Figure","type":"Plot"}]},"id":"f1bbad1f-c35e-40b5-9d51-4d5a226bcbd9","type":"Row"},{"attributes":{"callback":null},"id":"9352d5e7-45c4-4a9f-b626-8f5ad5130655","type":"DataRange1d"},{"attributes":{},"id":"20353552-e0ad-49e4-8fa7-cd13bcba5034","type":"LinearScale"},{"attributes":{},"id":"7376c70d-c69b-4b8b-8e28-fb4520539319","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"448ec8db-0819-4754-8b8a-f0fea4baa1c5","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b14eba7-73d5-4c43-b585-984fcdcde881","type":"BasicTicker"}},"id":"65baa7da-b197-4874-8e76-5412b62c110c","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6ba2fab3-b303-42fe-9e40-0f73f85d2432","type":"BoxSelectTool"},{"id":"af84b304-b24e-4894-8985-fbf314b776c0","type":"HoverTool"},{"id":"8c587282-93ed-4a9f-8f95-a22f00adecd3","type":"ResetTool"}]},"id":"4eaabf67-8aa5-43fc-8260-9972d5efcbc8","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"375b9dd8-3240-4b5c-8e73-a63dbdb0d5c8","type":"BoxAnnotation"},"renderers":[{"id":"c35f3326-e71f-44f5-bf64-ba915446319d","type":"GlyphRenderer"}]},"id":"6ba2fab3-b303-42fe-9e40-0f73f85d2432","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"f1bbad1f-c35e-40b5-9d51-4d5a226bcbd9","type":"Row"}]},"id":"fc755bd4-4ee7-4a3f-9eef-c347d70cbc36","type":"Column"},{"attributes":{},"id":"1d8b2861-ac9c-4351-a357-2aae770728b2","type":"BasicTickFormatter"},{"attributes":{},"id":"955e0d96-4d47-4a2b-8827-ae9aaa92404e","type":"LinearScale"},{"attributes":{},"id":"2c520fca-6697-4598-b9fa-e8779f41f87b","type":"LinearScale"},{"attributes":{},"id":"b46144a2-6c82-4122-add7-5497e51a5e4a","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa72ad2f-97c5-4a3c-bcab-4cdad3dbd35b","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"9a1a2048-8358-44cd-8db7-3fbf3acf6ea4","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4d4ee6d-3ba1-4381-8fe8-ca436b690229","type":"BasicTicker"}},"id":"cdd5f16f-6d52-4401-af0b-61f6caf1135d","type":"Grid"},{"attributes":{"data_source":{"id":"c1546c24-feed-416d-bebf-63507731e71a","type":"ColumnDataSource"},"glyph":{"id":"245b08b4-9c9f-419a-b10c-985e88d1f656","type":"Circle"},"hover_glyph":{"id":"5ed7cb7e-4835-4f7a-8ad2-3db4a20a5264","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"3a2956f2-85f1-4d40-941c-ca8560c8baf1","type":"Circle"},"selection_glyph":null,"view":{"id":"8a5cc8c1-8c97-405a-8f1b-eb7e6de2cca9","type":"CDSView"}},"id":"c35f3326-e71f-44f5-bf64-ba915446319d","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"bab83287-80f9-40d7-9fd5-a8d40f9840d6","type":"ToolbarBox"},{"id":"fc755bd4-4ee7-4a3f-9eef-c347d70cbc36","type":"Column"}]},"id":"ec00886b-9152-45ba-b1b0-3d29825c63c4","type":"Column"},{"attributes":{"plot":null,"text":""},"id":"4fbc7287-51dc-4458-9c92-59353038c0d1","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"245b08b4-9c9f-419a-b10c-985e88d1f656","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f1f227dd-0a3b-4c4a-bc1d-5264ab2c850a","type":"BoxSelectTool"},{"id":"928861d4-6fba-4572-adb6-d2259e15025d","type":"HoverTool"},{"id":"03c5803b-8290-4015-a6e9-872726eef35f","type":"ResetTool"}]},"id":"5fad1350-9fd0-4d0b-8274-ee55ff7a6d64","type":"Toolbar"},{"attributes":{"formatter":{"id":"1d8b2861-ac9c-4351-a357-2aae770728b2","type":"BasicTickFormatter"},"plot":{"id":"9a1a2048-8358-44cd-8db7-3fbf3acf6ea4","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4d4ee6d-3ba1-4381-8fe8-ca436b690229","type":"BasicTicker"}},"id":"f92f4a13-4762-41d0-a07d-3f130b29a94d","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"2fc33ad2-1dc0-4c45-9a09-1f10c87f20ab","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3a2956f2-85f1-4d40-941c-ca8560c8baf1","type":"Circle"},{"attributes":{},"id":"aff57690-2792-4861-b9d2-a571ccf0268a","type":"BasicTickFormatter"},{"attributes":{},"id":"8c587282-93ed-4a9f-8f95-a22f00adecd3","type":"ResetTool"},{"attributes":{"callback":null,"overlay":{"id":"b7ab473e-583d-41e2-b36c-dee209692bc9","type":"BoxAnnotation"},"renderers":[{"id":"f9ed1812-3698-4348-9330-5d3f849b321d","type":"GlyphRenderer"}]},"id":"f1f227dd-0a3b-4c4a-bc1d-5264ab2c850a","type":"BoxSelectTool"},{"attributes":{},"id":"be236adc-7f51-4ec9-960a-d1ec29f95218","type":"LinearScale"},{"attributes":{},"id":"5b14eba7-73d5-4c43-b585-984fcdcde881","type":"BasicTicker"},{"attributes":{},"id":"ec35faa6-4a5b-4060-bbd1-85fc2ec9224f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9a1a2048-8358-44cd-8db7-3fbf3acf6ea4","subtype":"Figure","type":"Plot"},"ticker":{"id":"d33bf585-dbed-4eb0-ac56-b6a6adee7722","type":"BasicTicker"}},"id":"12be6ef3-0dd2-4cdd-aaaf-f1c28f71737e","type":"Grid"},{"attributes":{"below":[{"id":"1dd6590d-ae5f-4bd5-b607-555128a8aea0","type":"LinearAxis"}],"left":[{"id":"fc07610e-309d-436d-8ad7-d686c8e8a65e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1dd6590d-ae5f-4bd5-b607-555128a8aea0","type":"LinearAxis"},{"id":"65baa7da-b197-4874-8e76-5412b62c110c","type":"Grid"},{"id":"fc07610e-309d-436d-8ad7-d686c8e8a65e","type":"LinearAxis"},{"id":"1e54d999-fed6-4e24-8477-8f6b272a1fbf","type":"Grid"},{"id":"375b9dd8-3240-4b5c-8e73-a63dbdb0d5c8","type":"BoxAnnotation"},{"id":"c35f3326-e71f-44f5-bf64-ba915446319d","type":"GlyphRenderer"}],"title":{"id":"2fc33ad2-1dc0-4c45-9a09-1f10c87f20ab","type":"Title"},"toolbar":{"id":"4eaabf67-8aa5-43fc-8260-9972d5efcbc8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9352d5e7-45c4-4a9f-b626-8f5ad5130655","type":"DataRange1d"},"x_scale":{"id":"955e0d96-4d47-4a2b-8827-ae9aaa92404e","type":"LinearScale"},"y_range":{"id":"5502dc06-bea2-4175-a5d1-c71f85179ccd","type":"DataRange1d"},"y_scale":{"id":"20353552-e0ad-49e4-8fa7-cd13bcba5034","type":"LinearScale"}},"id":"448ec8db-0819-4754-8b8a-f0fea4baa1c5","subtype":"Figure","type":"Plot"}],"root_ids":["ec00886b-9152-45ba-b1b0-3d29825c63c4"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"b2730b94-91a4-4928-97d1-c578d875027a","elementid":"db1f113e-469e-4d37-917e-52b8c3977ec3","modelid":"ec00886b-9152-45ba-b1b0-3d29825c63c4"}];
                
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
