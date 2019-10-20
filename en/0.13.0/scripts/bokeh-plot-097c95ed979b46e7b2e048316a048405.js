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
      };var element = document.getElementById("c5d0eeb0-b616-43b6-9019-25edf27fb187");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5d0eeb0-b616-43b6-9019-25edf27fb187' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"1c8337b2-fb06-4b3a-a702-a7ff6fdd7164":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"e203a7d5-7082-4891-a5df-8abb62781f75","type":"Toolbar"},{"attributes":{},"id":"f95fc8ed-21f5-4ee3-a362-9e4b67bef46b","type":"LinearScale"},{"attributes":{},"id":"9b1f3b29-e1d0-4d8b-8a0b-97b759384209","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}},"selected":{"id":"f0106872-0990-4992-a6e1-2a7c879967f4","type":"Selection"},"selection_policy":{"id":"571c8f01-e9d5-4079-9710-906990357126","type":"UnionRenderers"}},"id":"3f547b01-e7dc-4085-be60-ac9fb0d61144","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"6d202ef5-d06f-4eb8-9af9-de24254ee508","type":"Range1d"},{"attributes":{},"id":"ce34bf78-090b-49b1-9e62-cd36bbe0214f","type":"LinearScale"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"70712496-e512-491f-9b32-6c9a0efdd308","type":"Range1d"},{"attributes":{},"id":"57824b40-7b3b-4ad8-8593-1ab2184126de","type":"BasicTickFormatter"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"d440c6f9-00c4-4d02-833e-790991dade95","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"76ebea7b-1cd8-4d60-9d07-146acd7bcf46","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d440c6f9-00c4-4d02-833e-790991dade95","type":"LinearAxis"},{"id":"76ebea7b-1cd8-4d60-9d07-146acd7bcf46","type":"LinearAxis"},{"id":"1560836e-48e4-48c2-a835-cff21d7d01d1","type":"Grid"},{"id":"226ee2be-dc23-4ef9-894a-0552048186f7","type":"Grid"},{"id":"c147da81-8e51-4548-bd71-bb5988e228c5","type":"GlyphRenderer"},{"id":"8573230f-4518-4e3e-aacf-886072662d6c","type":"GlyphRenderer"}],"title":{"id":"b57bb8b8-383d-407f-bd31-ba5773693f85","type":"Title"},"toolbar":{"id":"e203a7d5-7082-4891-a5df-8abb62781f75","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6d202ef5-d06f-4eb8-9af9-de24254ee508","type":"Range1d"},"x_scale":{"id":"5db1a9d9-295b-4227-ae00-aac6095ab8aa","type":"LinearScale"},"y_range":{"id":"70712496-e512-491f-9b32-6c9a0efdd308","type":"Range1d"},"y_scale":{"id":"cdf46d57-cdcd-41ae-9963-da61e0ed82e5","type":"LinearScale"}},"id":"067a3ee9-b79d-4bb7-8371-5e492bd02a94","type":"Plot"},{"attributes":{},"id":"69ddad90-fdf5-4ce8-bb33-1fa35d9b377b","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"I"},"id":"b57bb8b8-383d-407f-bd31-ba5773693f85","type":"Title"},{"attributes":{},"id":"9ac2e097-f511-46ce-a968-bb5d435cd204","type":"LinearScale"},{"attributes":{"children":[{"id":"33752f83-f8d7-4f97-a774-364492cda8f6","type":"Plot"},{"id":"91d0ac53-9575-4ddd-af24-a20f1b5ea2de","type":"Plot"}]},"id":"66029b6b-9946-4c84-a68e-8a6096dfc8d1","type":"Row"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"995da714-f6dd-49ac-a11f-5603c31d0939","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"725abb77-0092-4911-84cc-8beca19c69b6","type":"BasicTickFormatter"},"plot":{"id":"067a3ee9-b79d-4bb7-8371-5e492bd02a94","type":"Plot"},"ticker":{"id":"fde143ab-b907-4d82-af18-51c7e8a5cb42","type":"BasicTicker"}},"id":"d440c6f9-00c4-4d02-833e-790991dade95","type":"LinearAxis"},{"attributes":{},"id":"d3c4ffa1-2650-4f6c-9e99-213701b9a417","type":"LinearScale"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"e7739a3f-d862-44d4-89c6-88c6bf396477","type":"BasicTickFormatter"},"plot":{"id":"067a3ee9-b79d-4bb7-8371-5e492bd02a94","type":"Plot"},"ticker":{"id":"c028381c-ea89-43e2-9107-a15615386eb2","type":"BasicTicker"}},"id":"76ebea7b-1cd8-4d60-9d07-146acd7bcf46","type":"LinearAxis"},{"attributes":{},"id":"570f2504-bd46-4b03-a102-6a08df5a3e4d","type":"BasicTickFormatter"},{"attributes":{},"id":"fde143ab-b907-4d82-af18-51c7e8a5cb42","type":"BasicTicker"},{"attributes":{},"id":"acce34be-1699-4d42-935a-72bdafd6b3cc","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"067a3ee9-b79d-4bb7-8371-5e492bd02a94","type":"Plot"},"ticker":{"id":"fde143ab-b907-4d82-af18-51c7e8a5cb42","type":"BasicTicker"}},"id":"1560836e-48e4-48c2-a835-cff21d7d01d1","type":"Grid"},{"attributes":{},"id":"fefb1ad3-4199-4647-ad6c-6594901703d7","type":"LinearScale"},{"attributes":{},"id":"c028381c-ea89-43e2-9107-a15615386eb2","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"067a3ee9-b79d-4bb7-8371-5e492bd02a94","type":"Plot"},"ticker":{"id":"c028381c-ea89-43e2-9107-a15615386eb2","type":"BasicTicker"}},"id":"226ee2be-dc23-4ef9-894a-0552048186f7","type":"Grid"},{"attributes":{},"id":"43a7ffbf-9273-4489-9564-70ece7fae72b","type":"BasicTickFormatter"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"fb1238af-8e88-4077-978f-7c2198941345","type":"Line"},{"attributes":{},"id":"d3d843c7-98e7-4356-b2ab-2a494c4cc33f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3f547b01-e7dc-4085-be60-ac9fb0d61144","type":"ColumnDataSource"},"glyph":{"id":"fb1238af-8e88-4077-978f-7c2198941345","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8058e145-8957-4fb2-9f18-57c0b6fb4cea","type":"CDSView"}},"id":"c147da81-8e51-4548-bd71-bb5988e228c5","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3f547b01-e7dc-4085-be60-ac9fb0d61144","type":"ColumnDataSource"}},"id":"8058e145-8957-4fb2-9f18-57c0b6fb4cea","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"870a4c98-5afa-4e52-abcb-87dded0af4cc","type":"Toolbar"},{"attributes":{},"id":"e7739a3f-d862-44d4-89c6-88c6bf396477","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f6f78f59-d9a4-44db-bdda-111021bd009a","type":"ColumnDataSource"},"glyph":{"id":"995da714-f6dd-49ac-a11f-5603c31d0939","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ccacc05f-f453-4139-84fb-246c50521fcc","type":"CDSView"}},"id":"8573230f-4518-4e3e-aacf-886072662d6c","type":"GlyphRenderer"},{"attributes":{"source":{"id":"f6f78f59-d9a4-44db-bdda-111021bd009a","type":"ColumnDataSource"}},"id":"ccacc05f-f453-4139-84fb-246c50521fcc","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"cb64f2d0-7867-453e-8094-b7a529ebf297","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"493a4ce1-fdb8-4408-97b9-84fa1de75715","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cb64f2d0-7867-453e-8094-b7a529ebf297","type":"LinearAxis"},{"id":"493a4ce1-fdb8-4408-97b9-84fa1de75715","type":"LinearAxis"},{"id":"b939680c-81a5-4f1e-bb7a-ed16d6b19b04","type":"Grid"},{"id":"8a404118-73a6-4488-a639-40b40444b06e","type":"Grid"},{"id":"a616a30b-0dbd-41cc-80b1-654d59c427c3","type":"GlyphRenderer"},{"id":"6fb22843-5ede-430f-a995-220cbff8b44a","type":"GlyphRenderer"}],"title":{"id":"b10a66c9-5a2c-4f79-8491-f9b8373e2e79","type":"Title"},"toolbar":{"id":"870a4c98-5afa-4e52-abcb-87dded0af4cc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6d202ef5-d06f-4eb8-9af9-de24254ee508","type":"Range1d"},"x_scale":{"id":"ce34bf78-090b-49b1-9e62-cd36bbe0214f","type":"LinearScale"},"y_range":{"id":"70712496-e512-491f-9b32-6c9a0efdd308","type":"Range1d"},"y_scale":{"id":"f95fc8ed-21f5-4ee3-a362-9e4b67bef46b","type":"LinearScale"}},"id":"dc938ee6-7a58-467b-8073-b7453cd3870b","type":"Plot"},{"attributes":{"plot":null,"text":"II"},"id":"b10a66c9-5a2c-4f79-8491-f9b8373e2e79","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"868b85af-4afb-4a21-8d9a-0f8976da10d1","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"57824b40-7b3b-4ad8-8593-1ab2184126de","type":"BasicTickFormatter"},"plot":{"id":"dc938ee6-7a58-467b-8073-b7453cd3870b","type":"Plot"},"ticker":{"id":"8453bb02-0a8b-480c-98cc-4a9aee2a8b02","type":"BasicTicker"}},"id":"cb64f2d0-7867-453e-8094-b7a529ebf297","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"69ddad90-fdf5-4ce8-bb33-1fa35d9b377b","type":"BasicTickFormatter"},"plot":{"id":"dc938ee6-7a58-467b-8073-b7453cd3870b","type":"Plot"},"ticker":{"id":"ba001ecb-a2f1-4db4-886e-c400bdb022d6","type":"BasicTicker"}},"id":"493a4ce1-fdb8-4408-97b9-84fa1de75715","type":"LinearAxis"},{"attributes":{},"id":"8453bb02-0a8b-480c-98cc-4a9aee2a8b02","type":"BasicTicker"},{"attributes":{"plot":{"id":"dc938ee6-7a58-467b-8073-b7453cd3870b","type":"Plot"},"ticker":{"id":"8453bb02-0a8b-480c-98cc-4a9aee2a8b02","type":"BasicTicker"}},"id":"b939680c-81a5-4f1e-bb7a-ed16d6b19b04","type":"Grid"},{"attributes":{},"id":"ba001ecb-a2f1-4db4-886e-c400bdb022d6","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"dc938ee6-7a58-467b-8073-b7453cd3870b","type":"Plot"},"ticker":{"id":"ba001ecb-a2f1-4db4-886e-c400bdb022d6","type":"BasicTicker"}},"id":"8a404118-73a6-4488-a639-40b40444b06e","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"093e85eb-4445-4a42-98d4-dbbbf0c096f4","type":"Line"},{"attributes":{"data_source":{"id":"3f547b01-e7dc-4085-be60-ac9fb0d61144","type":"ColumnDataSource"},"glyph":{"id":"093e85eb-4445-4a42-98d4-dbbbf0c096f4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"83051cc7-44ed-4461-832a-61bb5df84377","type":"CDSView"}},"id":"a616a30b-0dbd-41cc-80b1-654d59c427c3","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3f547b01-e7dc-4085-be60-ac9fb0d61144","type":"ColumnDataSource"}},"id":"83051cc7-44ed-4461-832a-61bb5df84377","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"d84addbd-2b98-43ec-9684-1c220f9432f9","type":"Toolbar"},{"attributes":{"data_source":{"id":"f6f78f59-d9a4-44db-bdda-111021bd009a","type":"ColumnDataSource"},"glyph":{"id":"868b85af-4afb-4a21-8d9a-0f8976da10d1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4c6658df-3961-4b4f-ac10-a0e27c766d5e","type":"CDSView"}},"id":"6fb22843-5ede-430f-a995-220cbff8b44a","type":"GlyphRenderer"},{"attributes":{"source":{"id":"f6f78f59-d9a4-44db-bdda-111021bd009a","type":"ColumnDataSource"}},"id":"4c6658df-3961-4b4f-ac10-a0e27c766d5e","type":"CDSView"},{"attributes":{},"id":"967c8c8e-6a73-40cb-830e-c88cc97d3b14","type":"Selection"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"77ce4037-b3fe-48c6-a2e3-d0a2e7489a36","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"f75b7390-bafd-4aa6-b69d-b95316d86995","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"77ce4037-b3fe-48c6-a2e3-d0a2e7489a36","type":"LinearAxis"},{"id":"f75b7390-bafd-4aa6-b69d-b95316d86995","type":"LinearAxis"},{"id":"678457ff-617a-4f87-ab02-1c4b976a1676","type":"Grid"},{"id":"aca31b01-ec31-474e-aae6-64728e597645","type":"Grid"},{"id":"ba2116b3-3b18-4345-8313-c2cdaadaf889","type":"GlyphRenderer"},{"id":"fc8359d5-ccf1-44d6-85e7-70ca2e121e13","type":"GlyphRenderer"}],"title":{"id":"a40e087b-58c0-4673-9972-dcbbba8f1cec","type":"Title"},"toolbar":{"id":"d84addbd-2b98-43ec-9684-1c220f9432f9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6d202ef5-d06f-4eb8-9af9-de24254ee508","type":"Range1d"},"x_scale":{"id":"9ac2e097-f511-46ce-a968-bb5d435cd204","type":"LinearScale"},"y_range":{"id":"70712496-e512-491f-9b32-6c9a0efdd308","type":"Range1d"},"y_scale":{"id":"9b1f3b29-e1d0-4d8b-8a0b-97b759384209","type":"LinearScale"}},"id":"33752f83-f8d7-4f97-a774-364492cda8f6","type":"Plot"},{"attributes":{"plot":null,"text":"III"},"id":"a40e087b-58c0-4673-9972-dcbbba8f1cec","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"f81c194b-15c4-4853-a12d-d225d04b01cb","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"570f2504-bd46-4b03-a102-6a08df5a3e4d","type":"BasicTickFormatter"},"plot":{"id":"33752f83-f8d7-4f97-a774-364492cda8f6","type":"Plot"},"ticker":{"id":"972d0d51-66e0-4d0f-bc3d-07f179b5f6bf","type":"BasicTicker"}},"id":"77ce4037-b3fe-48c6-a2e3-d0a2e7489a36","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"acce34be-1699-4d42-935a-72bdafd6b3cc","type":"BasicTickFormatter"},"plot":{"id":"33752f83-f8d7-4f97-a774-364492cda8f6","type":"Plot"},"ticker":{"id":"76c65fec-8246-498a-a5c4-e321a48371d3","type":"BasicTicker"}},"id":"f75b7390-bafd-4aa6-b69d-b95316d86995","type":"LinearAxis"},{"attributes":{},"id":"972d0d51-66e0-4d0f-bc3d-07f179b5f6bf","type":"BasicTicker"},{"attributes":{"plot":{"id":"33752f83-f8d7-4f97-a774-364492cda8f6","type":"Plot"},"ticker":{"id":"972d0d51-66e0-4d0f-bc3d-07f179b5f6bf","type":"BasicTicker"}},"id":"678457ff-617a-4f87-ab02-1c4b976a1676","type":"Grid"},{"attributes":{},"id":"76c65fec-8246-498a-a5c4-e321a48371d3","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"33752f83-f8d7-4f97-a774-364492cda8f6","type":"Plot"},"ticker":{"id":"76c65fec-8246-498a-a5c4-e321a48371d3","type":"BasicTicker"}},"id":"aca31b01-ec31-474e-aae6-64728e597645","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7375f563-f2ac-404b-9ab7-bab25f6c8a3a","type":"Line"},{"attributes":{"data_source":{"id":"3f547b01-e7dc-4085-be60-ac9fb0d61144","type":"ColumnDataSource"},"glyph":{"id":"7375f563-f2ac-404b-9ab7-bab25f6c8a3a","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4223a4fd-f39d-4dd3-a8ac-1235b61fa8a3","type":"CDSView"}},"id":"ba2116b3-3b18-4345-8313-c2cdaadaf889","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3f547b01-e7dc-4085-be60-ac9fb0d61144","type":"ColumnDataSource"}},"id":"4223a4fd-f39d-4dd3-a8ac-1235b61fa8a3","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"920aee8e-bf97-4193-abbc-6780d64b04bf","type":"Toolbar"},{"attributes":{"data_source":{"id":"f6f78f59-d9a4-44db-bdda-111021bd009a","type":"ColumnDataSource"},"glyph":{"id":"f81c194b-15c4-4853-a12d-d225d04b01cb","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ba359d77-520c-4a08-80a9-bd318364cb3a","type":"CDSView"}},"id":"fc8359d5-ccf1-44d6-85e7-70ca2e121e13","type":"GlyphRenderer"},{"attributes":{"source":{"id":"f6f78f59-d9a4-44db-bdda-111021bd009a","type":"ColumnDataSource"}},"id":"ba359d77-520c-4a08-80a9-bd318364cb3a","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"6d5ef717-863e-4d6e-a76a-c5bb116af172","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"3bf14e44-1387-4b6f-8084-a7015f9f0446","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6d5ef717-863e-4d6e-a76a-c5bb116af172","type":"LinearAxis"},{"id":"3bf14e44-1387-4b6f-8084-a7015f9f0446","type":"LinearAxis"},{"id":"21af3361-d863-4085-a0ec-68136a1ade43","type":"Grid"},{"id":"fbac8b8f-f197-466e-87d1-b5dd57096bec","type":"Grid"},{"id":"c0e97d6e-15a4-4e64-9339-637c3d786d5d","type":"GlyphRenderer"},{"id":"d0eae179-e2e9-43ca-bf87-fe10166208f0","type":"GlyphRenderer"}],"title":{"id":"d97b3026-75fd-4e5e-ae3c-d0d22d494763","type":"Title"},"toolbar":{"id":"920aee8e-bf97-4193-abbc-6780d64b04bf","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6d202ef5-d06f-4eb8-9af9-de24254ee508","type":"Range1d"},"x_scale":{"id":"fefb1ad3-4199-4647-ad6c-6594901703d7","type":"LinearScale"},"y_range":{"id":"70712496-e512-491f-9b32-6c9a0efdd308","type":"Range1d"},"y_scale":{"id":"d3c4ffa1-2650-4f6c-9e99-213701b9a417","type":"LinearScale"}},"id":"91d0ac53-9575-4ddd-af24-a20f1b5ea2de","type":"Plot"},{"attributes":{"plot":null,"text":"IV"},"id":"d97b3026-75fd-4e5e-ae3c-d0d22d494763","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"a24c4939-64a3-4061-a7de-c58bcc249201","type":"Circle"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"43a7ffbf-9273-4489-9564-70ece7fae72b","type":"BasicTickFormatter"},"plot":{"id":"91d0ac53-9575-4ddd-af24-a20f1b5ea2de","type":"Plot"},"ticker":{"id":"6129d340-f0b1-4c69-95d0-00ec4c4046cc","type":"BasicTicker"}},"id":"6d5ef717-863e-4d6e-a76a-c5bb116af172","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"d3d843c7-98e7-4356-b2ab-2a494c4cc33f","type":"BasicTickFormatter"},"plot":{"id":"91d0ac53-9575-4ddd-af24-a20f1b5ea2de","type":"Plot"},"ticker":{"id":"a5703ad4-3f71-4aea-a502-0afcf5aa2836","type":"BasicTicker"}},"id":"3bf14e44-1387-4b6f-8084-a7015f9f0446","type":"LinearAxis"},{"attributes":{},"id":"6129d340-f0b1-4c69-95d0-00ec4c4046cc","type":"BasicTicker"},{"attributes":{"plot":{"id":"91d0ac53-9575-4ddd-af24-a20f1b5ea2de","type":"Plot"},"ticker":{"id":"6129d340-f0b1-4c69-95d0-00ec4c4046cc","type":"BasicTicker"}},"id":"21af3361-d863-4085-a0ec-68136a1ade43","type":"Grid"},{"attributes":{},"id":"a5703ad4-3f71-4aea-a502-0afcf5aa2836","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"91d0ac53-9575-4ddd-af24-a20f1b5ea2de","type":"Plot"},"ticker":{"id":"a5703ad4-3f71-4aea-a502-0afcf5aa2836","type":"BasicTicker"}},"id":"fbac8b8f-f197-466e-87d1-b5dd57096bec","type":"Grid"},{"attributes":{"line_color":"#666699","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1b731a43-3538-4df2-8593-43afedc9becc","type":"Line"},{"attributes":{"data_source":{"id":"3f547b01-e7dc-4085-be60-ac9fb0d61144","type":"ColumnDataSource"},"glyph":{"id":"1b731a43-3538-4df2-8593-43afedc9becc","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"151ffd1f-3bca-47dd-962e-865456f13a77","type":"CDSView"}},"id":"c0e97d6e-15a4-4e64-9339-637c3d786d5d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3f547b01-e7dc-4085-be60-ac9fb0d61144","type":"ColumnDataSource"}},"id":"151ffd1f-3bca-47dd-962e-865456f13a77","type":"CDSView"},{"attributes":{"children":[{"id":"067a3ee9-b79d-4bb7-8371-5e492bd02a94","type":"Plot"},{"id":"dc938ee6-7a58-467b-8073-b7453cd3870b","type":"Plot"}]},"id":"55e9b276-6ed0-46b3-b374-364748fd9730","type":"Row"},{"attributes":{"data_source":{"id":"f6f78f59-d9a4-44db-bdda-111021bd009a","type":"ColumnDataSource"},"glyph":{"id":"a24c4939-64a3-4061-a7de-c58bcc249201","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b594ec95-d4ed-45a3-b390-71091af00ac1","type":"CDSView"}},"id":"d0eae179-e2e9-43ca-bf87-fe10166208f0","type":"GlyphRenderer"},{"attributes":{"source":{"id":"f6f78f59-d9a4-44db-bdda-111021bd009a","type":"ColumnDataSource"}},"id":"b594ec95-d4ed-45a3-b390-71091af00ac1","type":"CDSView"},{"attributes":{"children":[{"id":"55e9b276-6ed0-46b3-b374-364748fd9730","type":"Row"},{"id":"66029b6b-9946-4c84-a68e-8a6096dfc8d1","type":"Row"}]},"id":"6eedec11-3c6b-4b45-9553-377f928efd38","type":"Column"},{"attributes":{},"id":"cdf46d57-cdcd-41ae-9963-da61e0ed82e5","type":"LinearScale"},{"attributes":{},"id":"5db1a9d9-295b-4227-ae00-aac6095ab8aa","type":"LinearScale"},{"attributes":{},"id":"571c8f01-e9d5-4079-9710-906990357126","type":"UnionRenderers"},{"attributes":{},"id":"725abb77-0092-4911-84cc-8beca19c69b6","type":"BasicTickFormatter"},{"attributes":{},"id":"f0106872-0990-4992-a6e1-2a7c879967f4","type":"Selection"},{"attributes":{},"id":"a63c1dde-9361-4f3a-ad18-65739043ab81","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}},"selected":{"id":"967c8c8e-6a73-40cb-830e-c88cc97d3b14","type":"Selection"},"selection_policy":{"id":"a63c1dde-9361-4f3a-ad18-65739043ab81","type":"UnionRenderers"}},"id":"f6f78f59-d9a4-44db-bdda-111021bd009a","type":"ColumnDataSource"}],"root_ids":["6eedec11-3c6b-4b45-9553-377f928efd38"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"1c8337b2-fb06-4b3a-a702-a7ff6fdd7164","roots":{"6eedec11-3c6b-4b45-9553-377f928efd38":"c5d0eeb0-b616-43b6-9019-25edf27fb187"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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