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
      };var element = document.getElementById("e86494c6-d882-4452-be6c-2713a74cd461");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e86494c6-d882-4452-be6c-2713a74cd461' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"d3d699d1-54e3-405e-8fd2-af288c0fa361":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"klYNQQF39j8QFB/jKErZvzBSPmzmF+A/lKbou8eP1z/ynAzW/831vwKTLV1QVQtAic/cWiCd9j/s8xcG1egUQJiPS0KKEwdAoHTKesOwB0Cg5DZhOQTvv8re2zj4Pvy/oseIuGfSEkCG5EY4EgHiP4QeSCbL3Oi/eu+BkIac87+8EWq53GLeP55E6wgctPq/dP0J3ZLE9j+8rf04lsEHQKCY12kkEde/kJ1AS1o8tj/G9JespYrrP9rHXHYMBfu/7GPJLwjiBUCZsWrnChIaQD7xOC7PN/I/42LRaPo9B0AI2ao72r0EQKRnhNZ+SRpAFkNOh9UsAkBUONPa6XARQHy4PoopzeI/d9qx6MoGCkBWdrTBDSH8v2a44nkR/hJAmZWWB0ygCUATLWn2rtH2P84gLGm+x/a/qn+kQKC7C0BAoE6hyw+6v3qU2495v/g/wBw7y82R6z9JdqEShIMKQGZUoeckuQTAjrk31Fth+D+6591EyXDwv+Ti4nx1qA1Ap2QqN/xAAUD8l5Lw4cnnv08FylnvqAFAjc8P0Wkl/j/k/HSF2z0TQLJX3VuwpgxAFENwwgeU5r9xqejJQG8CQDOdLxYzEA5AMPcNuyXG8z9SP4831Y0PQOrGW7g6YxRAeFmItHe/17+fOLl+BAkHQICN2hlEyQVAMqSK1IQ5AcCEFqIna9AdQJS0dRKTKPg/fK8bcYTNEEC3NWchS9ITQFC1ihDgSxRAhA3fiva+8z/VGtaLOmD8P8hYFMmVgxBAEFQMdZVcyL8q30lgJ0zsP2Vp2rVBKPg/Y9LkxnwJ8j9cDKKKKKcJQLYivjogeP8/Q2hFkWAjDkCIyru3FvsNQOmRDo1JJgRAbRopeJX3/z9c1hwnCo0RQMhyTLmsMPU/2qoUmKm2EUCgrGtsLFXQvwDbvaaaygtA7Y80Z1ouBUDaT6ZpyT0FQCCVJGA5UwJAjNj97sFwEUBeF3mqTzoBwDLofh8VrQDAjJGOax2HEkAespodDJfjP7DC2MAk5r4/KLS+rf6eCkB4/k2nNn/jv78nGYOSOABAg+lz2QzKFEBAQwQ0aLDyP6QzvJLAVxRAWezCC9L0C0BSSjrxCt72PwxH0/p319k/7AvlroG09z+ur7IaSxD7P+FVwhcHFwhA0By7q/OB/z8jyjbw9DUCQB9KPnnOP/U/kZmtTCUZGEAmv6zzbUEDQPYrzH8W6RFA3qJQFH6mEUB+JlzFVub2v+SPZt0G3x5Apj5O5qeC/r9O+RKgQsQTQOxHoRfxLAFA26Q/N9JBF0AuQyUPtvMTQNh/4PdKBdm/A4rOKlJeAUDoWEIzkZrZv3IQsA2BLgtAQrkleEsSCkBqCu7Ot9vxvziJaos/W/Y/w8nJ2ic39j+kLBChyZkJQGzFNMAEU9Q/j6BcGfPMC0A8hZULyyT/P/J1MTwQ0PI/Tnh91/L0EUBmqmOeBrkKQFiCUbXvQf2/fCEyr9wY8z/wheYmgsC+P7LWEwcI1+U/8NUFaMVIwz+y9lryBV34P2gFZkwoChBATu3eOQeOB0BsAQ2KT1kGQEh7ZQLLzvk/moPinUd1/L/+AuGOfBH3P9fLIMpqHgNAV5ccFxU0BEAMtMY4nb0HQCH7WcXdQ/E/Fq6ag5jR8T8AZ9BmvIrWPybPr46TufS/BQPtZrHHBkBSsGTBk673P7pE3fGa9gtAJ5lZnVth8T/gBDfnBEQNwCLsqphqdAfAABFEQAo0C0AEyn/qyCbhv/Dc6q25dR9A7+UigT+LF0ADf6WvMpMRQLQtWROWRO6//YscL9i78T9KlWWUtCX3v3SxxYFipf0/pEOvxlQ7BUCg7xadfU+2Px6uApbK2v0/zvrUzlzm+r+ZmxngTiD6P5eZcVm5kw5AWDGqZ6mRF0Ai98YB1TTiP0seC7QCgQRAqP1x6amSCkBXiNG9q1MDQIwyogRv6QBADbfSuCF6A0Daw5NsOPTgP1nzWe8duBFANm4QG/kGGEBXNJ8CnPwAQKWJ8yTsdBFAYul5i5d1AED77qndQJ7/P1782LO3pgJAdGG6LKXH2j8zri/cYmgZQDCxy1uK4uw/WMYRc0F/+7+lGTwLDcj+P1x9vjw0s/A/057VWhbrAEBaApcVeLH9vzaC6oLD5xBAADNi07UTtL8f52f5hQcFQKKDT9Se//A/KA3zVP4oBkCIpioaC9PgP8BnGotsuui/w455DCpUFUAEB2lI6xr3PyDVJRkN6PU/LxSyW0K68j/Ui7acaUkEQPwEMNfgpd0/WcSBMFG4DUCJhXZS5WkDQEhvPHN/bxZAgPiW0Cqmqz9W8m3FP7b7Px0Mlj58T/w/+IRPgqIABUDMfYsLFNL4P1f/RdEmsglAkJyr7TyvtT+SVQlW/TgSQAxGEXKPcRRAOGVOTPnpCECsIPcF+zARQAIsFWCRLQ9ABAKFdm40E0AlkE0YbwX9PxLQBfZahO4/rAML10fLEECAmQlNvezQv0CCDZSij76/DDK/Sorq4D/sL7IyBTDdP8YAznfjmvU/TnOTp2XOFUBElLes2wQQQOzxqnaWRdQ/0g//Y8xlDUCB2PRtGf//P+mvyJHgygBA/I2dmAulEEDU1lSt2Ob/P1Iux4GMZf0/zNe2sssBAEBITKizXh/NP7AQBhZ31+e/ItaMacelFUAZohKNQFYFQEpPn+Yuu+w/+AZ1QT7e7b+aakVj8yMCQBrGwbnP/ew/Wmcz5SZv4D+y45ROxez5v1MEhstWJRhArHbwnv0fCED5m6olDDAMQICeZCcsI+8/ikgDYEm2DkBUK0sEGRQJQJwIgGmXYPQ/jElyp4RgB0AoS7+EH2rxPyb8MApgPwBA5B5DNX0X+j9ex/5lTWn5v330WpvZwApAwEfN+zlmAcAQ0kkXFV/NPwC7ArjKogNA5v0TrEVfEEBbMQBFAnn8P0C8vpyOlba/ShhsVmAQGkC2kgNldR0UQIDjKxEuj5C/7WDZs3LiCECEmbKui7ASQPu/Yq0/0/E/IFtyyTON5r/oat7lK1/uv3f+CsgrmABAPgsB+1Du8L+mZTdWjucEQORvd67dZAVAEC646vao5L+6rgYxZxz2P7pVz4UGGu0/gGJa4XWBob+m3jTrQiMJQIslG8e9WgJAnSfIPKY+FUBMUZ3r24n1P+XXkGdxGgVAzICOtUmWEkCCrRUwd9b0v3itkWXNPRFAV8aA3WMV/D/B8Daq8nsBQDDoGPJIUhJAaPYR7dqaD0DgapGCyDQVQEAHfvndJqU/3AbZMjz0CkAUXm2YAkoGQOrv+WD/ggFAAJMVc8QCwb+GK6o013UHQK6B+zGHhgVA1BwAYN3n+j9QciLe9Q0DQJCZ0tLTCgNAELaxwNBWEECkz6qOKyjsP8+cQzNAwvU//9aloF4y+z+S72hgBLLoP3QrLwJCdwlAFLmHgvf67z9w2xVTA1QNQCZf7oW9hhJAEub4JGOY9z9G7ul079XyP1v5APIsw/k/wY4ygfKKAUAapQ97MgLiP86xEaDDRPk/ECkVQUVyEEAFJcX0Z34DQDYxAroK0w9AHspfvTfzAcBPX9GhZjYSQIjhuFIYKds/aKS13/yuEECXZkI8DYfwPx35BLsyuwpAIzM+2grVFECZpBOXmu32PyRFf9ZV5/s/IHDsBPPl5L/+e0AtINnwP4Bx9nSl4Yo/is7uSBB6CUBMiwslHL3wP/xvx/T+GOe/cOZw3hoQCkCYcDSZvZHWPzOccI9tzQ9Ag1Xxoqa5CEBO19Vm8X4OQLCmhIt2+/Y/DupwGk6yA0AAps4Wq9qVv2DchsppjBJAnw5YQGr2AEB0EBKdXm7YPzXgmbJov/4/+8lbHusKHECj/TPFgR4RQAjHTqd4C8I/wet2UCufEEDnKPkTyk8JQHSiHtw33eg/rVVEFZibAUCwGOskT/vDPyPY9P9qlfo/C+hnvhF28z/MAJViaxkaQDyAIWG3hvg/8iCEYf5UEUD+Tf6z06kPQFaiyWuwUvk/alDMp8yv7z8ekylQ2OYRQCTiMaKZoNE/4KHl2EG65D+oj2ae7Mv9PzrW1JuaUhNAjFuvSVuEEUC1B8iKD+kMQNknhs40ZQxAyZOvpcZU8j8cV0oXT2bkv2inpODMieE/cjV6Wjp5CkDo0u0OOMD/P87MklRNJwNAKhSHIqwy7j/qJyPx4lj4v2jvX89I7v0/yK6jGCOWFEBEynsf/zMMQEbtbCSiF+E/RitujbJR/j97biXa5cnxPwx4URd3XvY/EE1/XPCYEEAKtBp+jxP8PwkWh+FoxBNAAH6CX3GCsT88EFkT8ULkv2iuSFHeR/q/3oXA/kLDDUDrQTEVthMSQBiKGEndnfi/mtJdktCU5z9ElWkmHMEPQEqMpGCNLPC/0Gg6/Ihxyr829DwFncHnP5RkvLPOrfA/q0zsagws9T8AurtUDmTtP4DM/Glz1aO/VB1omRvLFUA+TEWux2X9v340TN06L+A/XsrPAJm/9j9e94l2BlwRQG8U4ZEb5wFAfGseDbmfAkDY+nkLlNUNQEDMgtoSO8K/gOc+3Lr+6L9IaJj3WVECwJA5M09ibee/Ntk8HSRI9z/yYEl8/hfrP5dF9F/m1hVATryt4Aam9z/QOuNhBSb7PyYYHUzTuQRAVmRYG8iTCEC+uYU7EHTvP1ymT/oABNE/pRnTJI9V+j9S6zgCH1sIQABrkGthe9O/ZosuO9MuAEDIvDalAv3kP956wKtwxAJAhKGcufm/4L/kb5/p9jUCQJUvBeLDUQJAkuHYXo3U4j8tYIUGEq8FQEANx2eBvhFAMnVfW8Ud7D+UQqsRdh4KQDLZw3OaJRNAkFDz4rIsy78QuZqVt6YIwFSW9trwcxBAPvnSB/hUC0BiIqqN+zEDQBIKadGQNBZAG/QQvohmCEBEYUTDdaT0PxifrH7b6vQ/6CJ61zk50T9erjl7a1YRQCDcBeXcOso/9GLUjdMU2T8eckmnsy3gP+QPKtdGie8/8PkWrNjD4T9oRg0hz1Hiv7v8s3Sr8xBAxEnAA38f/j8qpfHowvsBwEr/dzlOzPq/X7gwLndCBUBwcDVLAvnbv4iC0nKvWuC/gDb6gXFlp7+2jllKtcrgP6hnrXfTIgtAzHUxIXoy6j8qOQNjZdgAQK7CNUz9FxBAAPCd8oxR979cCIGFSCTpv2kMRtFqDfI/2GQ/3p7t1r91iClJLfP8P3TC3Z0navg/gJmfhLAIqL/3kdOa3T4CQEixCM2Eb/i/IXrc9S559j+yuvMK0TEVQALM6NNfZwxA8WHwV7v2EUAGLfQW5v3qPxag/CMPKAdABoD48qGKBUAWXJmEsin1vw==","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"19357","type":"Selection"},"selection_policy":{"id":"19358","type":"UnionRenderers"}},"id":"19343","type":"ColumnDataSource"},{"attributes":{},"id":"19357","type":"Selection"},{"attributes":{"plot":{"id":"19310","subtype":"Figure","type":"Plot"},"ticker":{"id":"19321","type":"BasicTicker"},"visible":false},"id":"19324","type":"Grid"},{"attributes":{"data_source":{"id":"19336","type":"ColumnDataSource"},"glyph":{"id":"19338","type":"HexTile"},"hover_glyph":{"id":"19340","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"19339","type":"HexTile"},"selection_glyph":null,"view":{"id":"19342","type":"CDSView"}},"id":"19341","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"19310","subtype":"Figure","type":"Plot"},"ticker":{"id":"19326","type":"BasicTicker"},"visible":false},"id":"19329","type":"Grid"},{"attributes":{},"id":"19331","type":"ResetTool"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"19344","type":"Circle"},{"attributes":{"formatter":{"id":"19352","type":"BasicTickFormatter"},"plot":{"id":"19310","subtype":"Figure","type":"Plot"},"ticker":{"id":"19321","type":"BasicTicker"}},"id":"19320","type":"LinearAxis"},{"attributes":{"data_source":{"id":"19343","type":"ColumnDataSource"},"glyph":{"id":"19344","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19345","type":"Circle"},"selection_glyph":null,"view":{"id":"19347","type":"CDSView"}},"id":"19346","type":"GlyphRenderer"},{"attributes":{},"id":"19330","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19339","type":"HexTile"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"19335","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19338","type":"HexTile"},{"attributes":{"formatter":{"id":"19354","type":"BasicTickFormatter"},"plot":{"id":"19310","subtype":"Figure","type":"Plot"},"ticker":{"id":"19326","type":"BasicTicker"}},"id":"19325","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Hexbin for 500 points"},"id":"19309","type":"Title"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"19341","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"19348","type":"HoverTool"},{"attributes":{"source":{"id":"19343","type":"ColumnDataSource"}},"id":"19347","type":"CDSView"},{"attributes":{"callback":null},"id":"19312","type":"DataRange1d"},{"attributes":{},"id":"19316","type":"LinearScale"},{"attributes":{"callback":null},"id":"19314","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19330","type":"WheelZoomTool"},{"id":"19331","type":"ResetTool"},{"id":"19348","type":"HoverTool"}]},"id":"19332","type":"Toolbar"},{"attributes":{},"id":"19352","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"c":[1,1,1,1,1,1,1,5,2,1,3,2,1,2,2,1,4,1,2,2,9,5,7,1,6,1,1,5,1,1,8,5,8,5,4,6,1,2,1,2,1,4,6,9,7,11,11,6,3,1,3,4,5,11,12,13,9,12,5,2,1,4,11,8,14,12,9,6,3,3,3,1,5,9,6,7,8,10,3,2,3,2,1,1,2,2,7,6,7,2,4,2,1,3,3,5,6,9,9,4,1,2,2,4,1,6,3,1,1,1,1,2,1,3,2,2,1,2,2,3,1,1,1,1,1,1],"q":[-4,-4,-3,-3,-3,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,11,11,11,11],"r":[0,1,0,4,5,-2,-1,0,1,-4,-3,-2,-1,0,1,2,3,-7,-5,-4,-3,-2,-1,0,1,2,3,-6,-5,-4,-3,-2,-1,0,1,2,3,4,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,-6,-5,-4,-3,-2,-1,0,1,2,5,-7,-6,-5,-4,-3,-2,-1,0,1,2,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,2,-8,-7,-6,-5,-4,-3,-2,0,-9,-8,-7,-6,-5,-4,-3,-2,-1,-9,-8,-7,-6,-5,-4,-3,-2,-9,-8,-3,-2,-9,-8,-6,-4]},"selected":{"id":"19355","type":"Selection"},"selection_policy":{"id":"19356","type":"UnionRenderers"}},"id":"19336","type":"ColumnDataSource"},{"attributes":{},"id":"19358","type":"UnionRenderers"},{"attributes":{},"id":"19354","type":"BasicTickFormatter"},{"attributes":{},"id":"19321","type":"BasicTicker"},{"attributes":{},"id":"19356","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19340","type":"HexTile"},{"attributes":{},"id":"19355","type":"Selection"},{"attributes":{"high":14,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"19335","type":"LinearColorMapper"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"19320","type":"LinearAxis"}],"left":[{"id":"19325","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"19320","type":"LinearAxis"},{"id":"19324","type":"Grid"},{"id":"19325","type":"LinearAxis"},{"id":"19329","type":"Grid"},{"id":"19341","type":"GlyphRenderer"},{"id":"19346","type":"GlyphRenderer"}],"title":{"id":"19309","type":"Title"},"toolbar":{"id":"19332","type":"Toolbar"},"x_range":{"id":"19312","type":"DataRange1d"},"x_scale":{"id":"19316","type":"LinearScale"},"y_range":{"id":"19314","type":"DataRange1d"},"y_scale":{"id":"19318","type":"LinearScale"}},"id":"19310","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"19345","type":"Circle"},{"attributes":{"source":{"id":"19336","type":"ColumnDataSource"}},"id":"19342","type":"CDSView"},{"attributes":{},"id":"19318","type":"LinearScale"},{"attributes":{},"id":"19326","type":"BasicTicker"}],"root_ids":["19310"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"d3d699d1-54e3-405e-8fd2-af288c0fa361","roots":{"19310":"e86494c6-d882-4452-be6c-2713a74cd461"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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